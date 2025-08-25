import React, { useMemo, FC, ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { SyllabusChapter, GlossaryTerm } from '../types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyllabusToc from './SyllabusToc';

// Helper to generate URL-friendly slugs
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -

// Tooltip state type
interface TooltipState {
  content: string;
  top: number;
  left: number;
  width: number;
}

interface MobileTooltipState {
  term: GlossaryTerm;
  target: HTMLElement;
}

// Custom hook to create the linking logic, memoized for performance
const useGlossaryLinker = (
  glossary: GlossaryTerm[],
  onTermClick: (termId: string, event: React.MouseEvent<HTMLSpanElement>) => void,
  onTermMouseEnter: (event: React.MouseEvent<HTMLSpanElement>, term: GlossaryTerm) => void,
  onTermMouseLeave: () => void,
  isMobile: boolean
) => {
  return useMemo(() => {
    if (glossary.length === 0) {
      return ({ children }: { children: ReactNode }) => <>{children}</>;
    }

    const sortedGlossary = [...glossary].sort((a, b) => b.term.length - a.term.length);
    const termMap = new Map(sortedGlossary.map((g) => [g.term.toLowerCase(), g]));
    const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const allTermsPattern = sortedGlossary.map((g) => escapeRegExp(g.term)).join('|');
    const regex = new RegExp(`\\b(${allTermsPattern})\\b`, 'gi');

    const TextRenderer: FC<{ children: ReactNode }> = ({ children }) => {
      if (typeof children !== 'string') {
        return <>{children}</>;
      }

      const text = children;
      const parts: ReactNode[] = [];
      let lastIndex = 0;
      let match;
      regex.lastIndex = 0;

      while ((match = regex.exec(text)) !== null) {
        const termText = match[0];
        const termData = termMap.get(termText.toLowerCase());

        if (!termData) continue;

        if (match.index > lastIndex) {
          parts.push(text.substring(lastIndex, match.index));
        }

        parts.push(
          <span
            key={`${termData.id}-${match.index}`}
            className="cursor-pointer underline decoration-dashed underline-offset-2 decoration-text-muted"
            onClick={(e) => onTermClick(termData.id, e)}
            onMouseEnter={isMobile ? undefined : (e) => onTermMouseEnter(e, termData)}
            onMouseLeave={isMobile ? undefined : onTermMouseLeave}
          >
            {termText}
          </span>
        );
        lastIndex = match.index + termText.length;
      }

      if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
      }

      return <>{parts.length > 0 ? parts : text}</>;
    };

    return TextRenderer;
  }, [glossary, onTermClick, onTermMouseEnter, onTermMouseLeave, isMobile]);
};


// Component to handle fetching and rendering a single chapter
const Chapter: FC<{
  chapter: SyllabusChapter;
  glossary: GlossaryTerm[];
  onTermClick: (termId: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  onTermMouseEnter: (event: React.MouseEvent<HTMLSpanElement>, term: GlossaryTerm) => void;
  onTermMouseLeave: () => void;
  isMobile: boolean;
}> = ({ chapter, glossary, onTermClick, onTermMouseEnter, onTermMouseLeave, isMobile }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const TextRenderer = useGlossaryLinker(glossary, onTermClick, onTermMouseEnter, onTermMouseLeave, isMobile);

  const components = useMemo(() => ({
    p: ({ children }: { children?: ReactNode }) => <p><TextRenderer>{children}</TextRenderer></p>,
    li: ({ children }: { children?: ReactNode }) => <li><TextRenderer>{children}</TextRenderer></li>,
    h3: ({ children }: { children?: ReactNode }) => {
      const text = React.Children.toArray(children).join('');
      const id = `${chapter.id}-${slugify(text)}`;
      return <h3 id={id}><TextRenderer>{children}</TextRenderer></h3>;
    },
    h4: ({ children }: { children?: ReactNode }) => {
      const text = React.Children.toArray(children).join('');
      const id = `${chapter.id}-${slugify(text)}`;
      return <h4 id={id}><TextRenderer>{children}</TextRenderer></h4>;
    },
  }), [TextRenderer, chapter.id]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(chapter.filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((e) => {
        console.error(`Could not load chapter from ${chapter.filePath}`, e);
        setError('Kunde inte ladda kapitelinnehåll.');
      })
      .finally(() => setIsLoading(false));
  }, [chapter.filePath]);

  return (
    <div key={chapter.id} className="mb-12">
      <h2 id={`${chapter.id}-${slugify(chapter.title)}`} className="text-[1.875em] font-bold text-text-primary border-b-2 border-border-secondary pb-3 mb-6">
        {chapter.title}
      </h2>
      {isLoading && <p>Laddar...</p>}
      {error && <p className="text-text-destructive">{error}</p>}
      {!isLoading && !error && (
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </Markdown>
      )}
    </div>
  );
};

interface SyllabusViewProps {
  chapters: SyllabusChapter[];
  glossary: GlossaryTerm[];
  onTermClick: (termId: string) => void;
  isMobile?: boolean;
  isTocOpen?: boolean;
}

const SyllabusView: React.FC<SyllabusViewProps> = ({ 
  chapters, 
  glossary, 
  onTermClick,
  isMobile = false,
  isTocOpen: isTocOpenMobile = false,
}) => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [mobileTooltip, setMobileTooltip] = useState<MobileTooltipState | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTocOpenDesktop, setIsTocOpenDesktop] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);
  const scrollSaveTimeoutRef = useRef<number | null>(null);

  const showToc = isMobile ? isTocOpenMobile : isTocOpenDesktop;

  // State and logic for resizing margins
  const [contentMaxWidth, setContentMaxWidth] = useState<number | null>(null);
  const isResizingMargin = useRef(false);
  
  // Effect to handle mobile tooltip dismissal
  useEffect(() => {
    if (!mobileTooltip) return;
    const handleClickOutside = () => {
      setMobileTooltip(null);
    };
    // Use a timeout to prevent the same click that opened it from closing it
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside, { once: true });
    }, 10);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileTooltip]);


  // Effect to restore scroll position on mount
  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem('syllabusScrollPos');
    if (savedScrollPos && containerRef.current) {
      // Using a timeout to give content time to render, especially async markdown
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = parseInt(savedScrollPos, 10);
        }
      }, 500);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Debounced save scroll position
    if (scrollSaveTimeoutRef.current) {
      window.clearTimeout(scrollSaveTimeoutRef.current);
    }
    scrollSaveTimeoutRef.current = window.setTimeout(() => {
      sessionStorage.setItem('syllabusScrollPos', container.scrollTop.toString());
    }, 200);
    
    // Dynamically calculate the offset of sticky elements for an accurate trigger line
    const headerEl = container.querySelector<HTMLElement>('[data-sticky-header]');
    const tocEl = container.querySelector<HTMLElement>('[data-sticky-toc]');
    let scrollOffset = 0;
    if (headerEl) scrollOffset += headerEl.offsetHeight;
    if (tocEl && showToc) scrollOffset += tocEl.offsetHeight;
    scrollOffset += 8; // Base margin for aesthetics
    scrollOffset += 10; // Buffer to prevent mis-highlighting on scroll-to-link

    const headings = Array.from(
      container.querySelectorAll('h2[id], h3[id], h4[id]')
    ) as HTMLElement[];

    const containerTop = container.getBoundingClientRect().top;
    const triggerLine = containerTop + scrollOffset;
    
    let newActiveId: string | null = null;
    
    // Find the last heading that is above the trigger line.
    const lastActiveHeading = headings
      .slice()
      .reverse()
      .find(heading => heading.getBoundingClientRect().top <= triggerLine);

    if (lastActiveHeading) {
      newActiveId = lastActiveHeading.id;
    }

    if (activeTocId !== newActiveId) {
      setActiveTocId(newActiveId);
    }
  }, [activeTocId, showToc]);

  const scrollHandlerRef = useRef(handleScroll);
  useEffect(() => {
    scrollHandlerRef.current = handleScroll;
  });

  useEffect(() => {
    const container = containerRef.current;
    let ticking = false;
    const listener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollHandlerRef.current();
          ticking = false;
        });
        ticking = true;
      }
    };
    container?.addEventListener('scroll', listener);
    // Initial check after a delay to allow content to render
    const timer = setTimeout(listener, 550); 
    
    return () => {
      container?.removeEventListener('scroll', listener);
      clearTimeout(timer);
      // Also clear the save timeout on unmount
      if (scrollSaveTimeoutRef.current) {
        window.clearTimeout(scrollSaveTimeoutRef.current);
      }
    }
  }, []);

  const handleTermMouseEnter = (event: React.MouseEvent<HTMLSpanElement>, term: GlossaryTerm) => {
    const target = event.currentTarget;
    const container = containerRef.current;
    if (!container) return;

    const termRect = target.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    const top = termRect.bottom - containerRect.top + container.scrollTop;
    const left = termRect.left - containerRect.left + container.scrollLeft;
    
    setTooltip({
      content: term.definition,
      top: top,
      left: left,
      width: termRect.width,
    });
  };

  const handleTermMouseLeave = () => {
    setTooltip(null);
  };
  
  const handleTermClickMobile = (term: GlossaryTerm, event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation(); // Prevents the outside click listener from firing immediately
    setMobileTooltip({ term, target: event.currentTarget });
    onTermClick(term.id);
  };

  const activeTooltip = useMemo(() => {
    if (isMobile) {
      if (!mobileTooltip) return null;
      const { term, target } = mobileTooltip;
      if (!containerRef.current) return null;
      
      const termRect = target.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const top = termRect.bottom - containerRect.top + containerRef.current.scrollTop;
      const left = termRect.left - containerRect.left + containerRef.current.scrollLeft;
      
      return { content: term.definition, top, left, width: termRect.width };
    }
    return tooltip;
  }, [isMobile, mobileTooltip, tooltip]);


  const tooltipStyle = useMemo((): React.CSSProperties => {
    if (!activeTooltip) return { display: 'none' };
    
    const TOOLTIP_WIDTH = 384; // Corresponds to max-w-sm
    const PADDING = 16;
    const { top, left: termLeft, width: termWidth } = activeTooltip;

    // Default to centered: center of term minus half of tooltip width
    let finalLeft = termLeft + (termWidth / 2) - (TOOLTIP_WIDTH / 2);

    if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Adjust if it overflows right
        if (finalLeft + TOOLTIP_WIDTH > containerWidth - PADDING) {
            finalLeft = containerWidth - PADDING - TOOLTIP_WIDTH;
        }
        // Adjust if it overflows left
        if (finalLeft < PADDING) {
            finalLeft = PADDING;
        }
    }

    return {
      position: 'absolute',
      top: `${top + 8}px`,
      left: `${finalLeft}px`,
      width: `${TOOLTIP_WIDTH}px`,
      maxWidth: `calc(100% - ${PADDING * 2}px)`,
      zIndex: 30,
    };
}, [activeTooltip]);
  
  const handleMarginMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizingMargin.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const newHalfWidth = Math.abs(e.clientX - containerCenterX);
    let newMaxWidth = newHalfWidth * 2;

    const minWidth = 320;
    const maxWidth = containerRect.width - 48; // p-6 padding

    if (newMaxWidth < minWidth) newMaxWidth = minWidth;
    if (newMaxWidth > maxWidth) newMaxWidth = maxWidth;

    setContentMaxWidth(newMaxWidth);
  }, []);
  
  const handleMarginMouseUp = useCallback(() => {
    isResizingMargin.current = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
    window.removeEventListener('mousemove', handleMarginMouseMove);
    window.removeEventListener('mouseup', handleMarginMouseUp);
  }, [handleMarginMouseMove]);

  const handleMarginMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingMargin.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', handleMarginMouseMove);
    window.addEventListener('mouseup', handleMarginMouseUp);
  };
  
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMarginMouseMove);
      window.removeEventListener('mouseup', handleMarginMouseUp);
    };
  }, [handleMarginMouseMove, handleMarginMouseUp]);

  return (
    <div className="bg-bg-secondary rounded-lg shadow-lg h-full relative flex flex-col">
      {!isMobile && (
        <div 
          data-sticky-header
          className="sticky top-0 bg-bg-secondary py-4 px-6 z-20 border-b border-border-secondary flex justify-between items-center"
        >
          <h2 className="text-2xl font-bold text-text-primary">Syllabus</h2>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent accordion from toggling
              setIsTocOpenDesktop(!isTocOpenDesktop);
            }}
            className="p-2 rounded-md hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent"
            aria-label="Toggle Table of Contents"
            aria-expanded={isTocOpenDesktop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}
      
      <div ref={containerRef} className="relative overflow-y-auto flex-1">
        {activeTooltip && (
          <div
            className="p-3 text-sm bg-bg-tooltip text-text-tooltip rounded-lg shadow-xl pointer-events-none border border-border-secondary"
            style={tooltipStyle}
          >
            {activeTooltip.content}
          </div>
        )}
        {showToc && <SyllabusToc chapters={chapters} activeTocId={activeTocId} isMobile={isMobile} />}
        
        <div className="p-6">
          <div 
            className="prose mx-auto relative group" 
            style={{ 
              maxWidth: contentMaxWidth ? `${contentMaxWidth}px` : undefined,
              fontSize: 'var(--font-base-rem, 1rem)',
              lineHeight: 'var(--font-line-height, 1.7)',
            }}
          >
            <div
              className={`absolute z-10 top-0 bottom-0 -left-4 w-4 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start ${isMobile ? 'hidden' : ''}`}
              onMouseDown={handleMarginMouseDown}
              aria-hidden="true"
            >
              <div className="w-1 h-16 bg-bg-interactive hover:bg-bg-interactive-hover rounded-full"></div>
            </div>
            <div
              className={`absolute z-10 top-0 bottom-0 -right-4 w-4 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end ${isMobile ? 'hidden' : ''}`}
              onMouseDown={handleMarginMouseDown}
              aria-hidden="true"
            >
              <div className="w-1 h-16 bg-bg-interactive hover:bg-bg-interactive-hover rounded-full"></div>
            </div>

            {chapters.map((chapter) => (
              <Chapter
                key={chapter.id}
                chapter={chapter}
                glossary={glossary}
                onTermClick={(termId, event) => {
                  onTermClick(termId);
                  if (isMobile) {
                    const term = glossary.find(t => t.id === termId);
                    if (term) handleTermClickMobile(term, event);
                  }
                }}
                onTermMouseEnter={handleTermMouseEnter}
                onTermMouseLeave={handleTermMouseLeave}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusView;

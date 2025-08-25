
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { GlossaryTerm } from '../types';
import GlossaryToc from './GlossaryToc';

interface GlossaryViewProps {
  glossary: GlossaryTerm[];
  activeTermId: string | null;
  isMobile?: boolean;
  isTocOpen?: boolean;
}

const GlossaryView: React.FC<GlossaryViewProps> = ({ 
  glossary, 
  activeTermId, 
  isMobile = false,
  isTocOpen: isTocOpenMobile = false,
}) => {
  const itemRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTocOpenDesktop, setIsTocOpenDesktop] = useState(false);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const scrollSaveTimeoutRef = useRef<number | null>(null);

  const showToc = isMobile ? isTocOpenMobile : isTocOpenDesktop;

  // State and logic for resizing margins
  const [contentMaxWidth, setContentMaxWidth] = useState<number | null>(null);
  const isResizingMargin = useRef(false);

  // Effect to restore scroll position on mount
  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem('glossaryScrollPos');
    if (savedScrollPos && containerRef.current) {
      // Use a timeout to ensure content is loaded before scrolling
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = parseInt(savedScrollPos, 10);
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (activeTermId) {
       // Add a small delay to ensure the view has rendered and layout is calculated, especially on mobile
      setTimeout(() => {
        const node = itemRefs.current.get(activeTermId);
        node?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  }, [activeTermId]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Debounced save scroll position
    if (scrollSaveTimeoutRef.current) {
      window.clearTimeout(scrollSaveTimeoutRef.current);
    }
    scrollSaveTimeoutRef.current = window.setTimeout(() => {
      sessionStorage.setItem('glossaryScrollPos', container.scrollTop.toString());
    }, 200);
  
    // Dynamically calculate the offset of sticky elements for an accurate trigger line
    const headerEl = container.querySelector<HTMLElement>('[data-sticky-header]');
    const tocEl = container.querySelector<HTMLElement>('[data-sticky-toc]');
    let scrollOffset = 0;
    if (headerEl) scrollOffset += headerEl.offsetHeight;
    if (tocEl && showToc) scrollOffset += tocEl.offsetHeight;
    scrollOffset += 8; // Base margin for aesthetics
    scrollOffset += 10; // Buffer to prevent mis-highlighting on scroll-to-link

    const containerTop = container.getBoundingClientRect().top;
    const triggerLine = containerTop + scrollOffset;
  
    const letterAnchors = Array.from(
      container.querySelectorAll<HTMLDivElement>('div[id^="glossary-"]')
    );
  
    let newActiveId: string | null = null;
  
    // Find the last anchor that is above the trigger line.
    const lastActiveAnchor = letterAnchors
      .slice()
      .reverse()
      .find(anchor => anchor.getBoundingClientRect().top <= triggerLine);
  
    if (lastActiveAnchor) {
      newActiveId = lastActiveAnchor.id.replace('glossary-', '');
    }
    
    if (activeLetter !== newActiveId) {
      setActiveLetter(newActiveId);
    }
  }, [activeLetter, showToc]);

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
    if(glossary.length > 0) {
        // Initial check after content is likely rendered
        setTimeout(listener, 100);
    }
    return () => {
      container?.removeEventListener('scroll', listener);
      // Also clear the save timeout on unmount
      if (scrollSaveTimeoutRef.current) {
        window.clearTimeout(scrollSaveTimeoutRef.current);
      }
    };
  }, [glossary.length]);

  const handleMarginMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizingMargin.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const newHalfWidth = Math.abs(e.clientX - containerCenterX);
    let newMaxWidth = newHalfWidth * 2;
    const minWidth = 280;
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

  const firstLetterTermIds = React.useMemo(() => {
    const map = new Map<string, string>();
    glossary.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!map.has(firstLetter)) {
        map.set(firstLetter, term.id);
      }
    });
    return map;
  }, [glossary]);

  return (
    <div className="bg-bg-secondary rounded-lg shadow-lg h-full relative flex flex-col">
      {!isMobile && (
        <div 
          data-sticky-header
          className="sticky top-0 bg-bg-secondary py-4 px-6 z-20 border-b border-border-secondary flex justify-between items-center"
        >
          <h2 className="text-2xl font-bold text-text-primary">Glossary</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
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
        {showToc && <GlossaryToc glossary={glossary} activeLetter={activeLetter} isMobile={isMobile} />}

        <div className="p-6">
          <div
            className="space-y-4 mx-auto relative group"
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
            {glossary.map((term) => {
              const isActive = term.id === activeTermId;
              const firstLetter = term.term.charAt(0).toUpperCase();
              const isFirstOfLetter = firstLetterTermIds.get(firstLetter) === term.id;
              return (
                <React.Fragment key={term.id}>
                  {isFirstOfLetter && <div id={`glossary-${firstLetter}`} className="pt-2 -mt-2"></div>}
                  <div
                    ref={(el) => {
                      if (el) {
                        itemRefs.current.set(term.id, el);
                      } else {
                        itemRefs.current.delete(term.id);
                      }
                    }}
                    className={`p-4 rounded-lg transition-all duration-300 ${isActive ? 'bg-bg-active' : 'bg-bg-tertiary'}`}
                  >
                    <h3 className="font-bold text-[1.125em] text-text-primary">{term.term}</h3>
                    <p className="text-text-secondary mt-1">{term.definition}</p>
                    {term.synonyms && (
                      <p className="text-sm text-text-muted mt-2">
                        <span className="font-semibold">Synonyms:</span> {term.synonyms.join(', ')}
                      </p>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryView;

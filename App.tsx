
import React, { useState, useCallback, useEffect, useRef } from 'react';
import SyllabusView from './components/SyllabusView';
import GlossaryView from './components/GlossaryView';
import InfoModal from './components/InfoModal';
import FloatingMenu from './components/FloatingMenu';
import SettingsPopover from './components/SettingsPopover';
import { syllabusData } from './data';
import { GlossaryTerm, TypographySettings } from './types';

// --- Typography Settings Management ---
const getInitialTypography = (): TypographySettings => {
  try {
    const saved = localStorage.getItem('typographySettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Basic validation
      if (parsed.fontSize && parsed.lineHeight && parsed.fontFamily) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Failed to parse typography settings from localStorage", error);
  }
  // Default settings
  return {
    fontSize: 1,
    lineHeight: 1.7,
    fontFamily: "'Inter', sans-serif",
  };
};

// --- Responsive Hook ---
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 767px) and (orientation: portrait), (max-width: 998px) and (orientation: landscape)'
    );

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Initial check
    const resizeListener = () => handleResize();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return isMobile;
};


const App: React.FC = () => {
  const [activeTermId, setActiveTermId] = useState<string | null>(null);
  const [glossary, setGlossary] = useState<GlossaryTerm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // --- UI State ---
  const isMobile = useIsMobile();
  const [activePanel, setActivePanel] = useState<'syllabus' | 'glossary'>('syllabus');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [typographySettings, setTypographySettings] = useState<TypographySettings>(getInitialTypography);
  const [isSettingsPopoverOpen, setIsSettingsPopoverOpen] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Resizing logic state and refs
  const [glossaryWidth, setGlossaryWidth] = useState(500);
  const isResizing = useRef(false);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  // Effect to apply and save theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Effect to apply and save typography settings
  useEffect(() => {
    localStorage.setItem('typographySettings', JSON.stringify(typographySettings));
    const root = document.documentElement;
    root.style.setProperty('--font-family-body', typographySettings.fontFamily);
    root.style.setProperty('--font-base-rem', `${typographySettings.fontSize}rem`);
    root.style.setProperty('--font-line-height', String(typographySettings.lineHeight));
  }, [typographySettings]);

  useEffect(() => {
    fetch('./glossary.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to load glossary data');
        }
        return res.json();
      })
      .then((data: GlossaryTerm[]) => {
        setGlossary(data);
      })
      .catch(err => {
        console.error(err);
        setError('Could not load glossary. Please try refreshing the page.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current || !mainContainerRef.current) {
      return;
    }
    const containerRect = mainContainerRef.current.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;
    const minWidth = 300;
    const maxWidth = containerRect.width * 0.7;

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setGlossaryWidth(newWidth);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, [handleMouseMove]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };
  
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  };

  const sortedGlossaryData: GlossaryTerm[] = React.useMemo(() => {
    return [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  }, [glossary]);
  
  const handleTermClick = useCallback((termId: string) => {
    setActiveTermId(termId);
    if (isMobile) {
      setActivePanel('glossary');
    }
  }, [isMobile]);
  
  const renderPanels = () => {
    if (isMobile) {
      return activePanel === 'syllabus' ? (
          <SyllabusView 
            chapters={syllabusData} 
            glossary={glossary} 
            onTermClick={handleTermClick} 
            isMobile={true} 
            isTocOpen={isMobileTocOpen}
          />
        ) : (
          <GlossaryView 
            glossary={sortedGlossaryData} 
            activeTermId={activeTermId} 
            isMobile={true} 
            isTocOpen={isMobileTocOpen}
          />
        );
    }
    
    // Desktop layout
    return (
      <>
        <div className="flex-1 pr-3 min-w-0">
            <SyllabusView 
              chapters={syllabusData} 
              glossary={glossary} 
              onTermClick={handleTermClick} 
            />
        </div>
        
        {!isMobile && (
          <div
            className="w-2 cursor-col-resize bg-bg-interactive hover:bg-bg-interactive-hover transition-colors rounded-full flex-shrink-0"
            onMouseDown={handleMouseDown}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize panels"
          ></div>
        )}

        <div style={{ width: `${glossaryWidth}px` }} className="pl-3 flex-shrink-0">
            <GlossaryView 
              glossary={sortedGlossaryData} 
              activeTermId={activeTermId} 
            />
        </div>
      </>
    );
  };


  return (
    <div className="bg-bg-primary text-text-primary h-screen flex flex-col">
       {isMobile && !isLoading && !error && (
        <header className="bg-bg-secondary shadow-md p-2 flex justify-between items-center z-20 flex-shrink-0">
          <div className="flex items-center border border-border-secondary rounded-lg">
            <button 
              onClick={() => setActivePanel('syllabus')}
              className={`px-3 sm:px-4 py-1.5 text-sm font-semibold rounded-l-md transition-colors ${activePanel === 'syllabus' ? 'bg-bg-active text-text-accent' : 'text-text-primary hover:bg-bg-interactive'}`}
              aria-pressed={activePanel === 'syllabus'}
            >
              Syllabus
            </button>
            <button 
              onClick={() => setActivePanel('glossary')}
              className={`px-3 sm:px-4 py-1.5 text-sm font-semibold rounded-r-md border-l border-border-secondary transition-colors ${activePanel === 'glossary' ? 'bg-bg-active text-text-accent' : 'text-text-primary hover:bg-bg-interactive'}`}
              aria-pressed={activePanel === 'glossary'}
            >
              Glossary
            </button>
          </div>
          
          <div className="flex items-center gap-0 sm:gap-1">
            <button
                onClick={() => setIsMobileTocOpen(p => !p)}
                className="p-2 rounded-md hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent"
                aria-label="Toggle Table of Contents"
                aria-expanded={isMobileTocOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            
            <button onClick={() => setIsInfoModalOpen(true)} className="p-2 rounded-md hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent" aria-label="About this app's features">
                <span aria-hidden="true">ℹ️</span>
            </button>

            <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className="relative">
                <button onClick={() => setIsSettingsPopoverOpen(p => !p)} className="p-2 rounded-md hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent" aria-label="Open typography settings" aria-haspopup="dialog" aria-expanded={isSettingsPopoverOpen}>
                    <span aria-hidden="true">🗚</span>
                </button>
                <SettingsPopover 
                    isOpen={isSettingsPopoverOpen} 
                    onClose={() => setIsSettingsPopoverOpen(false)}
                    settings={typographySettings}
                    setSettings={setTypographySettings}
                    position="top"
                />
            </div>
          </div>
        </header>
      )}
      <main className="md:p-8 flex-1 flex flex-col min-h-0">
        {isLoading && <div className="text-center text-lg">Loading Content...</div>}
        {error && <div className="text-center text-lg text-text-destructive">{error}</div>}
        {!isLoading && !error && (
            <div ref={mainContainerRef} className={`flex-1 min-h-0 ${isMobile ? 'block' : 'flex'}`}>
              {renderPanels()}
            </div>
        )}
      </main>
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
       {!isMobile && !isLoading && !error && (
        <FloatingMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          typographySettings={typographySettings}
          setTypographySettings={setTypographySettings}
          onInfoClick={() => setIsInfoModalOpen(true)}
        />
      )}
    </div>
  );
};

export default App;
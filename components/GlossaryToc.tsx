
import React from 'react';
import { GlossaryTerm } from '../types';

interface GlossaryTocProps {
  glossary: GlossaryTerm[];
  activeLetter: string | null;
  isMobile: boolean;
}

const GlossaryToc: React.FC<GlossaryTocProps> = ({ glossary, activeLetter, isMobile }) => {
  const letters = React.useMemo(() => {
    const firstLetters = glossary.map(term => term.term.charAt(0).toUpperCase());
    return [...new Set(firstLetters)].sort();
  }, [glossary]);
  
  const handleLinkClick = (e: React.MouseEvent, letter: string) => {
    e.preventDefault();
    const element = document.getElementById(`glossary-${letter}`);
    if (!element) return;

    const container = element.closest('[class*="overflow-y-auto"]');
    if (!container) return;

    // Find sticky elements within the container to calculate a dynamic offset
    const headerEl = container.querySelector<HTMLElement>('[data-sticky-header]');
    const tocEl = container.querySelector<HTMLElement>('[data-sticky-toc]');

    let yOffset = 0;
    if (headerEl) yOffset += headerEl.offsetHeight;
    if (tocEl) yOffset += tocEl.offsetHeight;
    yOffset += 8; // Add a small margin for aesthetics

    const containerTop = container.getBoundingClientRect().top;
    const elementTop = element.getBoundingClientRect().top;
    const currentScrollTop = container.scrollTop;
    
    const targetScrollTop = currentScrollTop + (elementTop - containerTop) - yOffset;

    container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
    });
  };

  return (
    <div 
      data-sticky-toc
      className="sticky top-0 z-10 p-4 border-b border-border-secondary bg-bg-tertiary"
    >
      <h3 className="text-lg font-semibold mb-2 text-text-primary">Table of Contents</h3>
      <div className="flex flex-wrap gap-2">
        {letters.map(letter => {
          const isActive = letter === activeLetter;
          return (
            <a
              key={letter}
              href={`#glossary-${letter}`}
              onClick={(e) => handleLinkClick(e, letter)}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                isActive 
                  ? 'bg-bg-active text-text-accent' 
                  : 'bg-bg-interactive hover:bg-bg-interactive-hover text-text-secondary'
              }`}
            >
              {letter}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default GlossaryToc;
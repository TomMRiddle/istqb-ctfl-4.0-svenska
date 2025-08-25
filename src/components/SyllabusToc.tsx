import React, { useState, useEffect } from 'react';
import { SyllabusChapter } from '../types';

// Helper to generate URL-friendly slugs
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -

interface TocEntry {
  level: number;
  text: string;
  id: string;
}

interface SyllabusTocProps {
  chapters: SyllabusChapter[];
  activeTocId: string | null;
  isMobile: boolean;
}

const SyllabusToc: React.FC<SyllabusTocProps> = ({ chapters, activeTocId, isMobile }) => {
  const [allHeadings, setAllHeadings] = useState<Record<string, TocEntry[]>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchAllHeadings = async () => {
      const headingsByChapter: Record<string, TocEntry[]> = {};
      const headingRegex = /^(#{3,4})\s+(.*)/;

      for (const chapter of chapters) {
        try {
          const response = await fetch(chapter.filePath);
          const text = await response.text();
          const lines = text.split('\n');
          const foundHeadings: TocEntry[] = [];
          lines.forEach(line => {
            const match = line.match(headingRegex);
            if (match) {
              const level = match[1].length;
              const textContent = match[2].trim();
              foundHeadings.push({ level, text: textContent, id: `${chapter.id}-${slugify(textContent)}` });
            }
          });
          headingsByChapter[chapter.id] = foundHeadings;
        } catch (error) {
          console.error(`Failed to fetch headings for ${chapter.title}`, error);
          headingsByChapter[chapter.id] = [];
        }
      }
      setAllHeadings(headingsByChapter);
    };
    fetchAllHeadings();
  }, [chapters]);

  useEffect(() => {
    if (!activeTocId || Object.keys(allHeadings).length === 0) return;

    let activeChapterId: string | undefined = chapters.find(c => `${c.id}-${slugify(c.title)}` === activeTocId)?.id;

    if (!activeChapterId) {
      activeChapterId = Object.keys(allHeadings).find(chapterId =>
        allHeadings[chapterId].some(heading => heading.id === activeTocId)
      );
    }

    if (activeChapterId && !openSections[activeChapterId]) {
      setOpenSections(prev => ({ ...prev, [activeChapterId]: true }));
    }
  }, [activeTocId, allHeadings, chapters, openSections]);

  const toggleSection = (chapterId: string) => {
    setOpenSections(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };
  
  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
      className={`z-10 p-4 border-b border-border-secondary bg-bg-tertiary max-h-60 overflow-y-auto ${isMobile ? 'sticky top-0' : 'sticky top-0'}`}
    >
      <h3 className="text-lg font-semibold mb-3 text-text-primary">Table of Contents</h3>
      <ul>
        {chapters.map(chapter => {
          const chapterId = chapter.id;
          const chapterSlug = `${chapter.id}-${slugify(chapter.title)}`;
          const isChapterActive = activeTocId === chapterSlug;
          const isOpen = !!openSections[chapterId];

          return (
            <li key={chapterId} className="mb-1">
              <div className="flex items-center">
                <button
                  onClick={() => toggleSection(chapterId)}
                  className="mr-2 p-1 rounded hover:bg-bg-interactive"
                  aria-expanded={isOpen}
                  aria-controls={`toc-section-${chapterId}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href={`#${chapterSlug}`} 
                  onClick={(e) => handleLinkClick(e, chapterSlug)}
                  className={`font-semibold hover:underline ${isChapterActive ? 'text-text-accent' : 'text-text-primary'}`}
                >
                  {chapter.title}
                </a>
              </div>
              {isOpen && (
                <ul id={`toc-section-${chapterId}`} className="pl-6 mt-1 border-l-2 border-border-primary ml-3">
                  {(allHeadings[chapterId] || []).map((heading) => {
                    const isSubheadingActive = activeTocId === heading.id;
                    return (
                      <li key={heading.id} className="py-1 text-sm">
                        <a 
                          href={`#${heading.id}`}
                          onClick={(e) => handleLinkClick(e, heading.id)}
                          className={`hover:underline ${isSubheadingActive ? 'text-text-accent font-semibold' : 'text-text-secondary'}`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SyllabusToc;

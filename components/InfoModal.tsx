
import React, { useEffect, useRef } from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div 
        ref={modalRef} 
        className="bg-bg-secondary rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-border-primary">
          <h2 id="info-modal-title" className="text-xl font-bold text-text-primary">
            Smart Features
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-bg-interactive"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
            <p className="text-text-secondary mb-4">
                This web app is designed with a number of smart features to enhance your learning experience:
            </p>
            <ul className="space-y-3 list-disc list-inside text-text-secondary">
                <li>
                    <strong className="text-text-primary">Fully Responsive:</strong> The layout seamlessly transitions from a powerful dual-panel view on desktops to a clean, touch-friendly tab interface on mobile.
                </li>
                <li>
                    <strong className="text-text-primary">Interactive Content:</strong> Click on any underlined term in the syllabus to instantly highlight its definition in the glossary.
                </li>
                <li>
                    <strong className="text-text-primary">Dynamic Table of Contents:</strong> The ToC is always accessible, sticks to the top as you scroll, and automatically highlights your current position in the document for effortless navigation.
                </li>
                <li>
                    <strong className="text-text-primary">Personalized Reading:</strong> Use the typography settings (<span className="text-lg" aria-hidden="true">🗚</span>) to adjust font size, line height, and choose from a selection of readable fonts. Your preferences are saved for your next visit.
                </li>
                <li>
                    <strong className="text-text-primary">Customizable Desktop Layout:</strong> On larger screens, drag the central divider to resize panels, and drag the edges of the text to adjust content margins for optimal reading comfort.
                </li>
                <li>
                    <strong className="text-text-primary">Session Memory:</strong> The app remembers your scroll position in both the syllabus and glossary, so you can always pick up right where you left off.
                </li>
                <li>
                    <strong className="text-text-primary">Light & Dark Modes:</strong> Switch between light and dark themes (<span aria-hidden="true">☀️ / 🌙</span>) for comfortable reading in any lighting condition.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;

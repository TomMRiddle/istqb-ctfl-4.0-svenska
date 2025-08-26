
import React, { useState } from 'react';
import SettingsPopover from './SettingsPopover';
import { TypographySettings } from '../types';

interface FloatingMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  typographySettings: TypographySettings;
  setTypographySettings: React.Dispatch<React.SetStateAction<TypographySettings>>;
  onInfoClick: () => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({
  isDarkMode,
  toggleDarkMode,
  typographySettings,
  setTypographySettings,
  onInfoClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const menuButtonClasses = "w-12 h-12 bg-bg-secondary rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent transition-all duration-200";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-center gap-3">
      {/* Expanded Menu Items */}
      {isMenuOpen && (
        <div 
            className="flex flex-col-reverse items-center gap-3"
        >
          <button
            onClick={onInfoClick}
            className={menuButtonClasses}
            aria-label="About this app's features"
          >
            <span className="text-lg" aria-hidden="true">ℹ️</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className={menuButtonClasses}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(prev => !prev)}
              className={menuButtonClasses}
              aria-label="Open typography settings"
              aria-haspopup="dialog"
              aria-expanded={isSettingsOpen}
            >
              <span className="text-xl" aria-hidden="true">🗚</span>
            </button>
            <SettingsPopover 
              isOpen={isSettingsOpen} 
              onClose={() => setIsSettingsOpen(false)}
              settings={typographySettings}
              setSettings={setTypographySettings}
              position="bottom"
            />
          </div>
        </div>
      )}

      {/* Main Floating Action Button */}
      <button
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="w-16 h-16 bg-bg-secondary rounded-full shadow-xl flex items-center justify-center text-3xl hover:bg-bg-interactive focus:outline-none focus:ring-2 focus:ring-ring-accent ring-offset-2 ring-offset-bg-primary transition-transform duration-200 transform hover:rotate-12"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className={`transition-transform duration-300 inline-block ${isMenuOpen ? 'rotate-90' : ''}`}>
            {isMenuOpen ? '✕' : '⚙️'}
        </span>
      </button>

    </div>
  );
};

export default FloatingMenu;

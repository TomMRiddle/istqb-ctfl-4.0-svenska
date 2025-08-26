
import React, { useRef, useEffect } from 'react';
import { TypographySettings } from '../types';

interface SettingsPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  settings: TypographySettings;
  setSettings: React.Dispatch<React.SetStateAction<TypographySettings>>;
  position?: 'top' | 'bottom';
}

// --- Constants ---
const FONT_OPTIONS: Record<string, { name: string; family: string }[]> = {
  'Sans-Serif': [
    { name: 'Inter', family: "'Inter', sans-serif" },
    { name: 'Lato', family: "'Lato', sans-serif" },
    { name: 'Noto Sans', family: "'Noto Sans', sans-serif" },
  ],
  'Serif': [
    { name: 'Lora', family: "'Lora', serif" },
    { name: 'Merriweather', family: "'Merriweather', serif" },
    { name: 'Noto Serif', family: "'Noto Serif', serif" },
  ]
};

// --- Component ---
const SettingsPopover: React.FC<SettingsPopoverProps> = ({ isOpen, onClose, settings, setSettings, position = 'bottom' }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      // Use a timeout to prevent the same click that opened it from closing it
      setTimeout(() => document.addEventListener('mousedown', handleClickOutside), 0);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const baseClasses = "absolute w-72 bg-bg-secondary rounded-lg shadow-2xl border border-border-secondary z-30";
  const positionClasses = position === 'top'
    ? "top-full right-0 mt-2"
    : "bottom-full right-0 mb-3";

  return (
    <div
      ref={popoverRef}
      className={`${baseClasses} ${positionClasses}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-heading"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 space-y-4">
        <h3 id="settings-heading" className="text-lg font-semibold text-text-primary">Typography Settings</h3>
        
        {/* Font Size Slider */}
        <div className="space-y-1">
          <label htmlFor="font-size" className="text-sm font-medium text-text-secondary">Font Size</label>
          <input
            id="font-size"
            type="range"
            min="0.8"
            max="1.2"
            step="0.05"
            value={settings.fontSize}
            onChange={(e) => setSettings(s => ({ ...s, fontSize: parseFloat(e.target.value) }))}
            className="w-full h-2 bg-bg-interactive rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Line Height Slider */}
        <div className="space-y-1">
          <label htmlFor="line-height" className="text-sm font-medium text-text-secondary">Line Height</label>
          <input
            id="line-height"
            type="range"
            min="1.4"
            max="2.2"
            step="0.1"
            value={settings.lineHeight}
            onChange={(e) => setSettings(s => ({ ...s, lineHeight: parseFloat(e.target.value) }))}
            className="w-full h-2 bg-bg-interactive rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Font Family Selector */}
        <div className="space-y-2">
           <label className="text-sm font-medium text-text-secondary block">Font Family</label>
           {Object.entries(FONT_OPTIONS).map(([type, fonts]) => (
             <div key={type}>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">{type}</p>
                <div className="grid grid-cols-3 gap-2">
                  {fonts.map(font => {
                    const isActive = settings.fontFamily === font.family;
                    return (
                      <button
                        key={font.name}
                        onClick={() => setSettings(s => ({ ...s, fontFamily: font.family }))}
                        className={`text-sm py-1 px-2 rounded-md transition-colors text-center border ${
                          isActive
                            ? 'bg-bg-active text-text-accent border-text-accent'
                            : 'bg-bg-tertiary hover:bg-bg-interactive border-transparent'
                        }`}
                        style={{ fontFamily: font.family }}
                      >
                        {font.name}
                      </button>
                    );
                  })}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPopover;

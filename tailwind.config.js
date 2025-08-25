/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'bg-interactive': 'var(--color-bg-interactive)',
        'bg-interactive-hover': 'var(--color-bg-interactive-hover)',
        'bg-active': 'var(--color-bg-active)',
        'bg-tooltip': 'var(--color-bg-tooltip)',

        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-accent': 'var(--color-text-accent)',
        'text-tooltip': 'var(--color-text-tooltip)',
        'text-destructive': 'var(--color-text-destructive)',
        
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        
        'ring-accent': 'var(--color-ring-accent)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--prose-body)',
            '--tw-prose-headings': 'var(--prose-headings)',
            '--tw-prose-lead': 'var(--prose-lead)',
            '--tw-prose-links': 'var(--prose-links)',
            '--tw-prose-bold': 'var(--prose-bold)',
            '--tw-prose-counters': 'var(--prose-counters)',
            '--tw-prose-bullets': 'var(--prose-bullets)',
            '--tw-prose-hr': 'var(--prose-hr)',
            '--tw-prose-quotes': 'var(--prose-quotes)',
            '--tw-prose-quote-borders': 'var(--prose-quote-borders)',
            '--tw-prose-captions': 'var(--prose-captions)',
            '--tw-prose-code': 'var(--prose-code)',
            '--tw-prose-pre-code': 'var(--prose-pre-code)',
            '--tw-prose-pre-bg': 'var(--prose-pre-bg)',
            '--tw-prose-th-borders': 'var(--prose-th-borders)',
            '--tw-prose-td-borders': 'var(--prose-td-borders)',
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

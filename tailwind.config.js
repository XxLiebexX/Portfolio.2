/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-muted': 'var(--foreground-muted)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'border-subtle': 'var(--border-subtle)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        h1: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        technical: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        caption: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.04em' }],
      },
      backgroundImage: {
        'grid-technical': 'var(--grid-pattern)',
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        theme: {
          base: 'var(--bg-base)',
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
          faint: 'var(--text-faint)',
        },
        surface: {
          DEFAULT: 'var(--bg-surface)',
          hover: 'var(--bg-surface-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          hover: 'var(--border-hover)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
          surface: 'var(--accent-surface)',
          border: 'var(--accent-border)',
          'gradient-from': 'var(--accent-gradient-from)',
          'gradient-to': 'var(--accent-gradient-to)',
        },
        status: {
          success: 'var(--status-success)',
          info: 'var(--status-info)',
          warning: 'var(--status-warning)',
          danger: 'var(--status-danger)',
        }
      }
    },
  },
  plugins: [],
}

export default config

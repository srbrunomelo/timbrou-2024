export default {
  content: [],
  theme: {
    extend: {
      colors: {
        strong: '#000000d6',
        pure: '#000000bd',
        smooth: '#0000008c',
        meld: '#0000003b',
        disabled: '#0000004d',
        feedback: {
          alert: {
            accent: '#cf0303',
            subtle: '#fef6f6',
          },
          warning: {
            accent: '#9e5400',
            subtle: '#fff5e0',
          },
          success: {
            accent: '#0c790e',
            subtle: '#f2f8f2',
          },
          info: {
            accent: '#0b63cb',
            subtle: '#f0f7ff',
          },
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

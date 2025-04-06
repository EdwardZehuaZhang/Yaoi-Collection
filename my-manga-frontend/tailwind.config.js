/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Content colors
        'content-primary': '#1d1f1e',
        'content-secondary': '#646a69',
        'content-low-contrast': '#929c9a',
        'content-reversed': '#ffffff',
        'content-alpha-80': '#ffffffcc',
        'content-alpha-60': '#ffffff99',
        'content-alpha-20': '#ffffff33',
        'content-error': '#dc2626',
        'content-success': '#059669',
        
        // Background colors
        'background-dark-green': '#022c22',
        'background-beige': '#fff7ed',
        'background-green': '#bef264',
        'background-grey': '#f5faf9',
        'background-white': '#ffffff',
        'background-hover': '#edf2f1',
        'background-pressed': '#d9dedc',
        'background-disabled': '#f5faf9',
        
        // Border colors
        'border-solid': '#d9dedc',
        'border-transparent-white': '#ffffff3d',
        'border-transparent-dark': '#1d1f1e3d',
        'border-disabled': '#edf2f1',
        
        // Button colors
        'button-primary-normal': '#022c22',
        'button-primary-hover': '#064e3b',
        'button-primary-disabled': '#aeb5b4',
        
        'button-secondary-normal': '#bef264',
        'button-secondary-hover': '#a3e635',
        'button-secondary-disabled': '#aeb5b4',
        
        'button-tetriary-normal': '#022c22',
        'button-tetriary-hover': '#757978',
        'button-tetriary-disabled': '#aeb5b4',
        
        'button-tetriary-reversed-normal': '#ffffff',
        'button-tetriary-reversed-hover': '#ffffffb8',
        'button-tetriary-reversed-disabled': '#aeb5b4',
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
      fontSize: {
        // Headline sizes
        'headline-100': ['96px', { lineHeight: '90px', letterSpacing: '-4.8px' }],
        'headline-200': ['76px', { lineHeight: '80px', letterSpacing: '-2.28px' }],
        'headline-300': ['62px', { lineHeight: '68px', letterSpacing: '-1.86px' }],
        'headline-400': ['48px', { lineHeight: '60px', letterSpacing: '-1.44px' }],
        
        // Title sizes
        'title-100': ['40px', { lineHeight: '52px', letterSpacing: '-0.4px' }],
        'title-200': ['32px', { lineHeight: '40px', letterSpacing: '-0.32px' }],
        'title-300': ['24px', { lineHeight: '36px', letterSpacing: '-0.24px' }],
        'title-400': ['20px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        
        // Body sizes
        'body-100': ['18px', { lineHeight: '26px', letterSpacing: '-0.072px' }],
        'body-200': ['16px', { lineHeight: '24px', letterSpacing: '-0.064px' }],
        'body-300': ['14px', { lineHeight: '20px', letterSpacing: '-0.056px' }],
        'body-400': ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
      },
      boxShadow: {
        'button-focus': '0px 0px 0px 2px rgba(2, 44, 34, 0.24)',
        'elevation-medium': `
          0px 0px 0px 1px rgba(18, 105, 63, 0.08),
          0px 1px 2px rgba(167, 185, 164, 0.16),
          0px 24px 32px -12px rgba(54, 74, 54, 0.24)
        `,
        'elevation-small': `
          0px 0px 0px 1px rgba(18, 105, 63, 0.08),
          0px 1px 2px rgba(87, 92, 86, 0.16),
          0px 24px 24px -12px rgba(54, 74, 54, 0.06)
        `,
        'form-focus': `
          0px 0px 0px 3px rgba(2, 44, 34, 0.5),
          0px 0px 0px 2px rgba(255, 255, 255, 1),
          0px 0px 0px 1px rgba(2, 44, 34, 1),
          0px 1px 2px rgba(2, 44, 34, 0.5)
        `,
      },
      borderRadius: {
        'xs': '4px',
        's': '8px',
        'm': '12px',
        'l': '16px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
}
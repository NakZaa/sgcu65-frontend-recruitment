const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Prompt', ...defaultTheme.fontFamily.sans],
      display: [
        'Prompt',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      backgroundImage: (theme) => ({
        'mobile': "url('../components/bg-mobile.svg')",
        'desktop': "url('../components/bg-desktop.svg')",
      })
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [ require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  ],
}

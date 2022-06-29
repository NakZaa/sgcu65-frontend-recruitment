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
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  ],
}

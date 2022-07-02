const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')

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
        'isd-desktop': `url("${svgToDataUri(
          `<svg
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <rect width="1440" height="1024" fill="white" />
            <rect
              x="-321"
              y="1237.96"
              width="2106.75"
              height="849.91"
              transform="rotate(-23.883 -321 1237.96)"
              fill="#C9648B"
            />
            <rect
              x="726.579"
              y="1053.43"
              width="1378.3"
              height="849.91"
              transform="rotate(-64.2261 726.579 1053.43)"
              fill="#C9648B"
            />
            <rect
              x="296.149"
              y="1242.27"
              width="1661.57"
              height="849.91"
              transform="rotate(-46.7812 296.149 1242.27)"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1710.04"
              y1="1423.67"
              x2="805.653"
              y2="1608.91"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE7FAA" />
              <stop offset="1" stop-color="#DD8DAC" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="1440" height="1024" fill="white" />
            </clipPath>
          </defs>
        </svg>
      `
        )}")`,
        'isd-mobile': `url("${svgToDataUri(
          `<svg
          width="414"
          height="460"
          viewBox="0 0 414 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <rect width="414" height="460" fill="white" />
            <rect
              x="-22.2266"
              y="429.104"
              width="303.034"
              height="323.96"
              transform="rotate(-23.883 -22.2266 429.104)"
              fill="#C9648B"
            />
            <rect
              x="297.569"
              y="250.261"
              width="279.205"
              height="323.96"
              transform="rotate(-64.2261 297.569 250.261)"
              fill="#C9648B"
            />
            <rect
              x="77.0308"
              y="471.204"
              width="505.235"
              height="425.569"
              transform="rotate(-46.7812 77.0308 471.204)"
              fill="url(#paint0_linear)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="506.951"
              y1="562.033"
              x2="224.784"
              y2="597.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE7FAA" />
              <stop offset="1" stop-color="#DD8DAC" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="414" height="460" fill="white" />
            </clipPath>
          </defs>
        </svg>
      
      `
        )}")`,
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

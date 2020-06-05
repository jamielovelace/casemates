/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: {
        default: '#5c0a0c',
        light: '#732A2B',
        dark: '#470507'
      },
      secondary: {
        default: '#cc9900',
        light: '#D6A822',
        dark: '#B68700'
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      black: '#000',
      white: '#fff',
      body: '#444'
    },
    fontFamily: {
      body: ['Questrial', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: true,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
        'aos-init',
        'aos-animate',
        'data-aos-delay',
        'data-aos-duration',
        'fade-up',
        'bg-white',
        'bg-black',
        'bg-primary',
        'bg-primary-light',
        'bg-primary-dark',
        'bg-secondary',
        'bg-secondary-light',
        'bg-secondary-dark',
        'hover:bg-primary',
        'hover:bg-primary-light',
        'hover:bg-primary-dark',
        'hover:bg-secondary',
        'hover:bg-secondary-light',
        'hover:bg-secondary-dark'
      ]
    }
  }
}

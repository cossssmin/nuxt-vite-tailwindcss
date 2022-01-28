export default {
  build: {
    loaders: {
      css: {
        modules: false, // this fixes HMR with Tailwind's JIT
      },
    },
    postcss: {
      plugins: {
        'postcss-import': true,
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  },
  buildModules: [
    'nuxt-vite',
    '@nuxt/postcss8',
  ],
  css: [
    '@/assets/css/tailwind.css',
  ],
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Nuxt.js starter with Vite and Tailwind CSS',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
    ],
  },
  vite: {
    experimentWarning: false,
  },
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/plugin/notifications.css', '@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vee-validate',
    {
      src: '@/plugins/vue-core-image-upload',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['assets/scss/helpers/_color.scss', 'assets/scss/helpers/_font.scss', 'assets/scss/base/_media.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    'cookie-universal-nuxt',
  ],

  fontawesome: {
    // 引入所有
    component: 'FontAwesome',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    ...(process.env.DEPLOY_ENV === 'GH_PAGES' && {
      base: '/SideProject-Store/',
    }),

    // 換頁將網頁捲至最上方
    scrollBehavior: function () {
      return { x: 0, y: 0 }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['element-ui', 'vee-validate/dist/rules'],
    uglify: {
      uglifyOption: {
        comments: false,
        compress: {
          drop_console: true,
        },
      },
    },
  },
}

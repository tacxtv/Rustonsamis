'use strict'

import colors from 'vuetify/src/util/colors'
import { NuxtConfig } from '@nuxt/types'

// noinspection JSUnusedGlobalSymbols
export default <NuxtConfig>{
  telemetry: false,
  srcDir: 'src/',
  head: {
    title: 'Rustons Amis',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap' },
    ],
    css: [
      '~assets/css/global.css',
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  axios: {
    proxy: true,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  },
  proxy: {
    '/api/': {
      pathRewrite: { '^/api/': '/' },
      target: process.env.RUSTONSAMIS_API_BASE || 'http://localhost:4000/',
      xfwd: true,
      changeOrigin: true,
      ws: false,
    },
  }, vuetify: {
    treeShake: true,
    preset: 'vue-cli-plugin-vuetify-preset-rally/preset',
    customVariables: ['~/assets/sass/vuetify.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },build: {
    extend(config: any) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },

    plugins: [],

    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },

    transpile: [
      'vuetify/lib',
      'vue-cli-plugin-vuetify-preset-rally',
    ],
    parallel: true,
    cache: true,
  },
}

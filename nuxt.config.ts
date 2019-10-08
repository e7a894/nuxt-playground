import { Configuration } from '@nuxt/types';

const config: Configuration = {
  build: {
    extend(config, { isClient }) {
      if (isClient) config.devtool = '#source-map';
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  css: [
    '@/assets/app',
    '~~/node_modules/@fortawesome/fontawesome-svg-core/styles'
  ],
  loading: '~/components/molecules/MLoadingPanel/index.vue',
  plugins: ['~/plugins/fontawesome'],
  router: { base: '/nuxt-sandbox/' },
  srcDir: 'src'
};

export default config;

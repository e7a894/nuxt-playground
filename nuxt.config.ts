import { Configuration } from '@nuxt/types';

const config: Configuration = {
  build: {
    extend(config, { isClient }) {
      if (isClient) config.devtool = '#source-map';
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  css: ['@/assets/app'],
  loading: '~/components/molecules/MLoadingPanel/index.vue',
  router: { base: '/nuxt-sandbox/' },
  srcDir: 'src'
};

export default config;

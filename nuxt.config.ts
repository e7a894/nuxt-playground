import { Configuration } from '@nuxt/types';

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  css: ['@/assets/app'],
  loading: '~/components/molecules/MLoadingPanel/index.vue',
  srcDir: 'src'
};

export default config;

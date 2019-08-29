import { Configuration } from '@nuxt/types';

const config: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  css: ['@/assets/app'],
  srcDir: 'src'
};

export default config;

import { storiesOf } from '@storybook/vue';
import ALoading from './index.vue';

storiesOf('Atoms/ALoading', module).add(
  'sample',
  () => ({
    components: { ALoading },
    template: `<a-loading />`
  }),
  { info: true }
);

import { storiesOf } from '@storybook/vue';
import AHeaderItem from './index.vue';

storiesOf('AHeaderItem', module).add(
  'default',
  () => ({
    components: { AHeaderItem },
    template: `<a-header-item />`
  }),
  { info: true }
);

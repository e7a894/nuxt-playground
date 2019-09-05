import { storiesOf } from '@storybook/vue';
import AHeader from './index.vue';

storiesOf('Atoms/AHeader', module)
  .add(
    'default',
    () => ({
      components: { AHeader },
      template: '<a-header />'
    }),
    { info: true }
  )
  .add(
    'sample',
    () => ({
      components: { AHeader },
      template: `<a-header :style="{
        backgroundColor: 'red'
      }" />`
    }),
    { info: true }
  );

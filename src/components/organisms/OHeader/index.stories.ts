import { storiesOf } from '@storybook/vue';
import OHeader from './index.vue';

storiesOf('Organisms/OHeader', module)
  .add(
    'default',
    () => ({
      components: { OHeader },
      template: '<o-header />'
    }),
    { info: true }
  )
  .add(
    'sample',
    () => ({
      components: { OHeader },
      template: `<o-header :style="{
        backgroundColor: 'red'
      }" />`
    }),
    { info: true }
  );

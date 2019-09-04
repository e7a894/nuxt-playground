import { storiesOf } from '@storybook/vue';
import MGridHeader from './index.vue';

storiesOf('Molecules/MGridHeader', module).add(
  'sample',
  () => ({
    components: { MGridHeader },
    props: {
      columns: {
        default: [
          { name: 'name', type: 'string', width: 100 },
          { name: 'aim', type: 'string', width: 200 }
        ]
      }
    },
    template: `<m-grid-header :columns="columns" />`
  }),
  { info: true }
);

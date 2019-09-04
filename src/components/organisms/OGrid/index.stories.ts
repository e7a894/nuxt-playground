import { storiesOf } from '@storybook/vue';
import OGrid from './index.vue';

storiesOf('Organisms/OGrid', module).add(
  'sample',
  () => ({
    components: { OGrid },
    props: {
      columns: {
        default: [
          { name: 'name', type: 'string', width: 100 },
          { name: 'aim', type: 'string', width: 200 }
        ]
      },
      rows: {
        default: [
          { name: 'aaaa', aim: 'xxxx' },
          { name: 'bbbb', aim: 'yyyy' },
          { name: 'cccc', aim: 'zzzz' }
        ]
      }
    },
    template: `<o-grid :columns="columns" :rows="rows" />`
  }),
  { info: true }
);

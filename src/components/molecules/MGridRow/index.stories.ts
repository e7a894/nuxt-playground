import { storiesOf } from '@storybook/vue';
import MGridRow from './index.vue';

storiesOf('Molecules/MGridRow', module).add(
  'sample',
  () => ({
    components: { MGridRow },
    props: {
      columns: {
        default: [
          { name: 'name', type: 'string', width: 100 },
          { name: 'aim', type: 'string', width: 200 }
        ]
      },
      cells: {
        default: [
          { name: 'name', value: 'aaaa', align: 'left' },
          { name: 'aim', value: 'xxxx', align: 'right' }
        ]
      }
    },
    template: `<m-grid-row :columns="columns" :cells="cells" />`
  }),
  { info: true }
);

import { storiesOf } from '@storybook/vue';
import { radios, text } from '@storybook/addon-knobs';
import AGridCell from './index.vue';

storiesOf('Atoms/AGridCell', module).add(
  'sample',
  () => ({
    components: { AGridCell },
    props: {
      value: { default: text('value', 'value') },
      align: {
        default: radios('align', {
          left: 'left',
          center: 'center',
          right: 'right'
        })
      }
    },
    template: `<a-grid-cell :value="value" :align="align" />`
  }),
  { info: true }
);

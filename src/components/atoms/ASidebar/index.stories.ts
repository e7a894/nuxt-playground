import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import ASidebar from './index.vue';

storiesOf('Atoms/ASidebar', module)
  .add(
    'default',
    () => ({
      components: { ASidebar },
      props: { expand: { default: boolean('expand', false) } },
      template: `<a-sidebar />`
    }),
    { info: true }
  )
  .add(
    'sample',
    () => ({
      components: { ASidebar },
      props: { expand: { default: boolean('expand', false) } },
      template: `<a-sidebar :expand="expand">
        <div :style="{
          backgroundColor: '#666',
          height: '100%'
        }">test</div>
      </o-sidebar>`
    }),
    { info: true }
  );

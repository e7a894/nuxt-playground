import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import OSidebar from './index.vue';

storiesOf('Molecules/MSidebar', module)
  .add(
    'default',
    () => ({
      components: { OSidebar },
      props: { expand: { default: boolean('expand', false) } },
      template: `<o-sidebar />`
    }),
    { info: true }
  )
  .add(
    'sample',
    () => ({
      components: { OSidebar },
      props: { expand: { default: boolean('expand', false) } },
      template: `<o-sidebar :expand="expand">
        <div :style="{
          backgroundColor: '#666',
          height: '100%'
        }">test</div>
      </o-sidebar>`
    }),
    { info: true }
  );

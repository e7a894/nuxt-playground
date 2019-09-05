import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import MSidebarBlock from './index.vue';

const info = {
  summary: `You can expand sidebar on hover.  
  When expand prop is \`false\`, the content width does not shrink and the sidebar overlpas the content.  
  When expand prop is \`true\`, the content width shrinks and the sidebar is aligned with the content.`
};

const description = {
  OSidebarBlock: {
    slots: {
      sidebar: 'slot for sidebar',
      content: 'slot for content'
    }
  }
};

storiesOf('Molecules/MSidebarBlock', module)
  .add(
    'default',
    () => ({
      components: { MSidebarBlock },
      props: { expand: { default: boolean('expand', false) } },
      template: `<m-sidebar-block />`,
      description
    }),
    { info }
  )
  .add(
    'sample',
    () => ({
      components: { MSidebarBlock },
      data() {
        return { expand: false };
      },
      template: `<m-sidebar-block :expand="expand">
        <template #sidebar>
          <div :style="{
            height: '100%', backgroundColor: '#666'
          }">
            <button @click="expand = !expand">!!</button>
          </div>
        </template>
        <template #content>
          <div :style="{
            backgroundColor: '#eee', textAlign: 'center'
          }">expand: {{expand}}</div>
        </template>
      </m-sidebar-block>`,
      description
    }),
    { info }
  );

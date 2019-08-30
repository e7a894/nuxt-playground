import { storiesOf } from '@storybook/vue';
import { text, number } from '@storybook/addon-knobs';
import AAvatar from './index.vue';

storiesOf('Atoms/AAvatar', module).add(
  'sample',
  () => ({
    components: { AAvatar },
    props: {
      src: { default: text('src', 'https://imgur.com/XWBCjN9.png') },
      size: { default: number('size(px)', 36) },
      radius: { default: number('radius(%)', 50) }
    },
    template: `<a-avatar :src="src" :size="size" :radius="radius" />`
  }),
  { info: true }
);

import * as Storybook from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/assets/app.scss';

const req = require.context('../src/components', true, /.stor(y|ies).ts$/);
const loadStories = ()  => req.keys().forEach(file => req(file));

Storybook.addParameters({ options: { addonPanelInRight: true }})
Storybook.addDecorator(withInfo);
Storybook.addDecorator(withKnobs as any);
Storybook.configure(loadStories, module);

import { html } from 'lit-html';
import '../src/openwc-template.js';

export default {
  title: 'OpenwcTemplate',
  component: 'openwc-template',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <openwc-template
      style="--openwc-template-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </openwc-template>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

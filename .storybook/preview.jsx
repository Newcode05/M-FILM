/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "./test.css"
const preview = {

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    }
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: '10px', fontFamily: 'Roboto, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

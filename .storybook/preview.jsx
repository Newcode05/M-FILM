/** @type { import('@storybook/react').Preview } */
import "./test.css"
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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

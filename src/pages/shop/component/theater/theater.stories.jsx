import { Theater } from "./theater";
export default {
    title: 'Shop/Component/Theater',
    component: Theater
}
const Template = (args) => <Theater {...args} />;
export const Default = Template.bind({});
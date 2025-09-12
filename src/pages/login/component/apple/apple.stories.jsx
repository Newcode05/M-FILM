import { CustomApple } from "./apple";
export default {
    title: 'Login/Component/Apple',
    component: CustomApple
}
const Template = (args) => <CustomApple {...args} />
export const Default = Template.bind({});
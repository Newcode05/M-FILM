import { User } from "./user";
export default {
    title: 'Header/Component/User',
    component: User
}
const Template = (args) => <User  {...args} />;
export const Default = Template.bind({});
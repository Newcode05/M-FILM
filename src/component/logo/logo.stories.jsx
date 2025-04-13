import { Logo } from "./logo";
export default {
    title: "Component/Logo",
    component: Logo
}
const Template = (args) => <Logo {...args} />
export const Default = Template.bind({});
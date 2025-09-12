import { Card } from "./card";
export default {
    title: 'NavLeft/Component/Card',
    component: Card
}
const Template = (args) => <Card {...args} />
export const Default = Template.bind({});
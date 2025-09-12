import { FoodCard } from "./foodcard";
export default {
    title: 'Shop/Component/FoodCard',
    component: FoodCard
}
const Template = (args) => <FoodCard {...args} />
export const Default = Template.bind({});

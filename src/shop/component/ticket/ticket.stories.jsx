import { TicketCard } from "./ticket";

export default {
    title: 'Shop/Component/TicketCard',
    component: TicketCard
}
const Template = (args) => <TicketCard {...args} />
export const Default = Template.bind({});
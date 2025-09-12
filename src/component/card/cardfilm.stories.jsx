import { CardFilm } from "./cardfilm";
export default {
    title: 'Component/CardFilm',
    component: CardFilm
}
const Template = (args) => <CardFilm {...args} />
export const Default = Template.bind({});

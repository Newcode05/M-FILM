import { Switch } from "./switch";

export default {
  title: 'Login/Component/Switch',
  component: Switch,
};

export const Default = {
  args: {
    indexActive: 2,
    setIndexActive: () => {},
    customStyle: {
      position: 'relative',
    },
  },
};

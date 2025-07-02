import { Link } from "react-router-dom";
import { Input } from "./input";
export default {
    title: 'Login/Component/Input',
    component: Input
}
export const Default = {
    args: {
        type: "text",
        name: 'firstname',
        placeholder: 'First name',
        customStyle: {
            width: '250px'
        },
        customClass: '',
        handleChange: () => { }
    }
}

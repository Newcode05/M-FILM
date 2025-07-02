
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { CustomLoginGoogle } from "./google"
export default {
    title: 'Login/Component/Google',
    component: CustomLoginGoogle
}
const Template = (args) => <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com"> <CustomLoginGoogle {...args} /></GoogleOAuthProvider>
export const Default = Template.bind({});
import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { LoginContext, AuthContext } from "../../../../App";
import axios from "axios";
import Cookies from "js-cookie";
import { intance } from "../../../../Providers/axiosClient";
import styles from "./google.module.css"

const CustomLoginGoogle = () => {
    const { login, setLogin } = useContext(LoginContext);
    const { setUser } = useContext(AuthContext);
    const sendUser = (user) => {
        intance.post('/api/login/auth', user)
            .then(res => {
                console.log(res);
                if (res.data['message'] === 'success') {
                    const { user } = res.data;
                    setLogin(true);
                    setUser({
                        'id': user.id,
                        'name': user.name,
                        'email': user.email,
                        'role': user.role,
                        'bg': user.bg
                    })
                }

                return res;
            })
            .then(data => console.log(data));
    }
    const getUser = async (tokenResponse) => {
        console.log(tokenResponse);
        try {
            const option = {
                headers: {
                    'Authorization': `Bearer ${tokenResponse.access_token}`
                }
            }
            const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', option);
            sendUser(res.data);
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    const loginSub = useGoogleLogin({
        onSuccess: (tokenResponse) => getUser(tokenResponse),
        onError: (error) => console.log(error)
    });
    return (
        <div className={styles['button-google']} onClick={() => loginSub()}><span></span><span>Google</span></div>
    )
}
export { CustomLoginGoogle }

import { useGoogleLogin } from "@react-oauth/google";

import { useLogIn } from "../../../../Providers/Context/LoginContext";
import { useAuth } from "../../../../Providers/Context/AuthContext";

import { intance } from "../../../../Providers/axiosClient";
import styles from "./google.module.css"

export const CustomLoginGoogle = ({ setElement = () => { }, setNotice = () => { } }) => {
    const { setLogin } = useLogIn();
    const { setUser } = useAuth();
    const sendUser = (user) => {
        intance.post('/api/login/auth', user)
            .then(res => {
                console.log(res);
                setNotice(true);
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
                else {
                    setLogin(false);
                    setElement('Account or password is incorrect');
                }
            })
            .then(data => console.log(data))
            .catch(err => {
                console.log(err);
                setNotice(true);
                setElement(err);
            }
            );
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
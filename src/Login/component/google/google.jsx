import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import styles from "./google.module.css"
const CustomLoginGoogle = () => {
    const sendUser = async (data) => {
        try {
            const option = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),  // Lấy CSRF token từ cookie
                },
                withCredentials: true,
            };
            await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {
                withCredentials: true,
            });
            axios.post('http://127.0.0.1:8000/login-new', data, option)
                .then(responsenew => responsenew.data)
                .then(data => console.log(data));
        }

        catch (error) {
            console.log('Error sending user data:', error);
        }
    }

    const getUser = async (tokenResponse) => {
        console.log(tokenResponse);
        try {
            const option = {
                headers: {
                    'Authorization': `Bearer ${tokenResponse.access_token}`
                }
            }
            const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', option);
            console.log(response.data);
            const { sub, access_token, email } = response.data;
            const userData = {
                'id_gg': sub,
                'access_token': access_token,
                'email': email
            }
            sendUser(userData);
        }
        catch (error) {
            console.log('Error fetching user data:', error);
        }
    }
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => getUser(tokenResponse),
        onError: (error) => console.log(error)
    });
    return (
            <div className={styles['button-google']} onClick={() => login()}><span></span><span>Google</span></div>
    )
}
export { CustomLoginGoogle }
import { useContext, useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginContext } from "../../../App";
import { checkAll } from "./login";
import { Snipper } from "../../component/loading_snipper/snipper";
import styles from "./login.module.css";

import axios from "axios";
import { v4 as uuid4 } from "uuid";
function Login() {
    const { login, setLogin } = useContext(loginContext);
    const [snipper, setSnipper] = useState(null);
    const [inforform, setInforForm] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const [seePassword, setSeenPassword] = useState(false);
    const [warn, setWarn] = useState(0);
    const [index_image, set_index_image] = useState(0);
    const form = useRef(null);
    const navigate = useNavigate();
    const images = [
        '/Login/lu kinh 1.png',
        '/Login/kho do danh 2.jpg',
        '/Login/khi cuoc doi cho ban qua quyt.jpg'
    ];
    useEffect(() => {
        let time = null;
        if (login) {
            time = setTimeout(() => {
                navigate('/');
            }, 3000);
        }
        return () => time ? clearTimeout(time) : null;
    });
    const text = ['Hight quality', 'Whole Funny moment', 'Great experencie '];
    //Hàm cập nhật inforform
    const onChange = (e) => {
        setInforForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }));
    }
    //Hàm kiểm tra có đồng ý thỏa thuận không 
    const onCheked = (e) => {
        setInforForm(prev => ({ ...prev, [e.target.name]: e.target.checked }))
    }
    //Hàm check r gửi form
    const onSub = (e) => {
        e.preventDefault();
        if (!checkAll(inforform, setWarn)) {
        }
        else {
            setWarn(0);
            setSnipper(true);
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(inforform)
            }

            fetch('http://127.0.0.1:8000/api/sign', option)
                .then(response => { console.log(response); return response.json() })
                .then(data => {
                    console.log(data);
                    setSnipper(false);
                    if (data['status_login'] == 'success') {
                        setLogin(true);
                        alert('Đăng nhập thành công');
                    }
                    else {
                        setLogin(true);
                        alert('Tài khoản hoặc mật khẩu không chính xác');
                    }
                })
                .catch(error => console.log("Connect error:", error));

        }
    }


    return (
        <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com" >
            <div className={styles['main']}>
                <div className={styles['form']} >
                    <div className={styles['bg-slides']}>
                        <div className={styles['slides']}>
                            <div className={styles['button-back']}><Link to="/"><span>Back to website</span><span></span></Link></div>

                            <h2 className={styles['text-dis']}>{text[index_image]}</h2>
                            <div className={styles['button-active']}>
                                {images.map((image, index) =>
                                    <span className={index_image == index ? styles['active-index'] : ''}
                                        key={index}
                                        onClick={() => set_index_image(index)}>
                                    </span>
                                )}

                            </div>
                            {images.map((image, index) =>
                                <img className={`${styles['img-slide']} ${index_image == index ? styles['img-active'] : ''} `}
                                    src={image}
                                    width="100%"
                                    height="100%"
                                    key={index}
                                    alt="ảnh slide" />
                            )}
                        </div>
                    </div>
                    <div className={styles['contain-form']}>
                        <h1 className={styles['header-form']}>Create an account</h1>
                        <h2 className={styles['form-link']}>Already have an account ? <Link to="/">Login</Link></h2>
                        <form ref={form} action="login.php" className={styles['login-form']} onSubmit={(e) => onSub(e)}>
                            <div>
                                <label htmlFor="user-firstname"></label>
                                <input type="text" name="firstname" className={styles["firstname"]} placeholder="First name" onChange={(e) => onChange(e)} required />
                                <div className={`${styles['warn']}`}>{warn == 1 ? '* Firstname is invalid' : ''}</div>
                            </div>
                            <div>
                                <label htmlFor="user-lastname"></label>
                                <input type="text" name="lastname" className={styles["lastname"]} placeholder="Last name" onChange={(e) => onChange(e)} required />
                                <div className={`${styles['warn']}`}>{warn == 2 ? '* Lastname is invalid' : ''}</div>
                            </div>
                            <div>
                                <label htmlFor="user-password"></label>
                                <input type="email" name="email" className={styles["email"]} placeholder="Email" onChange={(e) => onChange(e)} required />
                                <div className={`${styles['warn']}`}>{warn == 3 ? '* Email is invalid' : ''}</div>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type={seePassword ? "text" : "password"} name="password" className={styles['password']} placeholder="abc@123" onChange={(e) => onChange(e)} required />
                                <div style={{ backgroundImage: seePassword ? 'url("/Login/eye.png")' : 'url("/Login/eye-closed.png")' }}
                                    className={styles['eye']}
                                    onClick={() => setSeenPassword(prev => !prev)}>
                                </div>
                                <div className={`${styles['warn-password']}`}>
                                    {warn == 4 ? `* Password must include at least one [A-Z], one [a-z], 
                                    [0-9],one special character.` : ''}
                                </div>
                            </div>
                            <h2 className={styles['term']}><input type="checkbox" name="agree" onClick={(e) => onCheked(e)} />I agree to the <Link to="">Term&Conditions</Link></h2>
                            <div className={styles['warn']}>{warn == 5 ? 'Please accepted with the policy' : null}</div>
                            <button className={styles['sub-form']} type="submit">{snipper ? <Snipper /> : "Create account"}</button>
                            <span className={styles['text']}>Or register with</span>
                            <CustomLoginGoogle />
                            <div className={styles['button-apple']}><span></span><span>Apple</span></div>
                        </form>
                    </div >
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
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
export { Login };
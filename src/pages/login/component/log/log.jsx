import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { ButtonSign } from "../button/button"
import { Input } from "../input/input"
import { Logo } from "../../../../component/logo/logo.jsx"
import { CheckLogin } from "../../layout/form.js"
import { AuthContext, LoginContext } from "../../../../App.jsx"
import { Warn } from "../../../../layout/warn/warn.jsx"
import { intance } from "../../../../Providers/axiosClient.jsx"

import styles from "./log.module.css"

const LogIn = () => {
    const { setUser } = useContext(AuthContext);
    const { login, setLogin } = useContext(LoginContext);
    const [form, setForm] = useState(
        {
            'email': '',
            'password': ''
        }
    )
    const [load, setLoad] = useState(false);
    const [warn, setWarn] = useState(0);
    const [notice, setNotice] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(login);
        if (login) {
            setNotice(true);
            let time = setTimeout(() => {
                navigate('/');
                setNotice(false);
            }, 3000);
        }
        return () => clearTimeout(login)
    }, [login]);
    useEffect(() => {
        console.log(form);
        if (warn != 0) {
            setWarn(0);
        }
    }, [form]);
    const onSub = async (e) => {
        setLoad(true);
        console.log(form);
        e.preventDefault();
        console.log('a');
        if (!CheckLogin(form, setWarn)) {
            setLoad(false);
        }
        else {
            intance.post('/login', {
                email: form.email,
                password: form.password
            })
                .then(res => {
                    if (res) {
                        console.log(res);
                        setLoad(false);
                        if (res.data.message === "success") {
                            const { user } = res.data;
                            setUser({
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role
                            })
                            setLogin(true);
                        }
                        else {
                            console.log('Đăng nhập không thành công');
                        }
                    }
                })
                .catch(err => console.log(err))

        }
    }
    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }))
    }
    return (
        <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com" >
            {notice ? <Warn /> : null}
            <div className={styles['container']}>
                <div className={styles['contain']}>
                    <h2 className={styles['title']}>
                        <Logo customStyle={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'transparent'
                        }}
                        />Log In</h2>
                    <form action="" className={styles['form-login']} onSubmit={(e) => onSub(e)}>
                        <h3 className={styles['register']}>Don't have account? <Link to="/register"> Register</Link></h3>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            warn={warn == 1 ? "* Email is invalid" : ""}
                            handleChange={handleChange}

                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="abc@123"
                            warn={warn == 2 ? "* Password must include at least one [A-Z], one [a-z], [0-9],one special character." : ""}
                            handleChange={handleChange}
                        />
                        <ButtonSign type="login" load={load} handleClick={() => setLoad(true)} />
                        <div className={styles['login-title']}>Or login with</div>
                        <div className={styles['login']}>
                            <CustomLoginGoogle />
                            <CustomApple />
                        </div>
                    </form>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
export { LogIn }
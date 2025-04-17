import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { ButtonSign } from "../button/button"
import { Input } from "../input/input"
import { Logo } from "../../../component/logo/logo"
import { CheckLogin } from "../../layout/form.js"

import { AuthContext } from "../../../App.jsx"
import { loginContext } from "../../../App.jsx"

import styles from "./log.module.css"

const LogIn = () => {
    const { setUser } = useContext(AuthContext);
    const { login, setLogin } = useContext(loginContext);
    const [form, setForm] = useState(
        {
            'email': '',
            'password': ''
        }
    )
    const [load, setLoad] = useState(false);
    const [warn, setWarn] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (login) {
            let time = setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [login])
    useEffect(() => {
        console.log(form);
        if (warn != 0) {
            setWarn(0);
        }
    }, [form]);
    const onSub = (e) => {
        setLoad(true);
        console.log(form);
        e.preventDefault();
        console.log('a');
        if (!CheckLogin(form, setWarn)) {
            setLoad(false);
        }
        else {
            console.log('success');
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            fetch("http://127.0.0.1:8000/api/login", option)
                .then(response => {
                    setLoad(false);
                    return response.json()
                })
                .then(data => {
                    if (data['login_status'] == 'success') {
                        setLogin(true);
                        const { user } = data;
                        setUser({
                            id: user.id,
                            name: user.name,
                            email: user.email
                        });

                    }
                    console.log(data);
                })
                .catch(error => console.log(error))
        }
    }
    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }))
    }
    return (
        <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com" >
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
                            warn={warn == 1 ? "*Invalid" : ""}
                            handleChange={handleChange}

                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="abc@123"
                            warn={warn == 2 ? "*Invalid" : ""}
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
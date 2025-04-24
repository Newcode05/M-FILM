import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { Input } from "../input/input"
import { ButtonSign } from "../button/button"
import { Logo } from "../../../../component/logo/logo.jsx"
import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { LoginContext, AuthContext } from "../../../../App.jsx"

import { checkRegister } from "../../layout/form.js"
import { intance } from "../../../../Providers/axiosClient.jsx"

import styles from "./register.module.css"




const Register = () => {
    const { setUser } = useContext(AuthContext);
    const { login, setLogin } = useContext( LoginContext);
    const [form, setForm] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'term': '',
        'type': 'local'
    });
    const [load, setLoad] = useState(false);
    const [warn, setWarn] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(form);
    }, [form]);
    useEffect(() => {
        if (login) {
            let time = setTimeout(() => {
                navigate('/');
            }, 3000)
            return () => time ? clearTimeout(time) : null;
        }

    }, [login]);
    const onSub = (e) => {
        e.preventDefault();
        setLoad(true);
        if (!checkRegister(form, setWarn)) {
            setLoad(false);
        }
        else {
            intance.post('api/register', form)
                .then(res => {
                    setLoad(false);
                    if (res.data['register_status'] == 'success') {
                        setLogin(true);
                        console.log(res);
                        const { user } = res.data;
                        setUser({
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role
                        });
                    }
                    else {
                        setWarn(6);
                    }
                }).catch(error => {
                    setLoad(false);
                    console.log(error);
                });
        }

    }
    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }));
    }
    const handleCheck = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.checked }));
    return (
        <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com">
            <div className={styles['container']}>
                <div className={styles['contain']}>

                    <h2 className={styles['title']}>
                        <Logo customStyle={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'transparent'
                        }} />
                        Register
                    </h2>
                    <form action="" className={styles['form-contain']} onSubmit={(e) => onSub(e)}>
                        <h3 className={styles['login']}>You already have account? <Link to="/login">Log in</Link></h3>
                        <div className={styles['name']}>
                            <Input customClass={styles["name"]}
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                handleChange={handleChange}
                                warn={warn == 0 ? "* Firstname is invalid" : ""} />
                            <Input customClass={styles["name"]}
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                handleChange={handleChange}
                                warn={warn == 1 ? "* Lastname is invalid" : ""} />
                        </div>
                        <Input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            handleChange={handleChange}
                            warn={warn == 3 ? "* Email is invalid" : warn == 6 ? "* Email đã tồn tại" : ""} />
                        <Input
                            type="password"
                            name="password"
                            placeholder="abc@123"
                            handleChange={handleChange}
                            warn={warn == 4 ? "* Password must include at least one [A-Z], one [a-z], [0-9],one special character." : ""} />
                        <Input
                            type="checkbox"
                            name="term"
                            handleChange={handleCheck}
                            warn={warn == 5 ? "* Invalid" : ''}
                        />
                        <ButtonSign load={load} />
                        <div className={styles['register-title']}>Or register with</div>
                        <div className={styles['register']}>
                            <CustomLoginGoogle />
                            <CustomApple />
                        </div>
                    </form>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
export { Register }
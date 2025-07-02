import { createContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { Warn } from "../../../../layout/warn/warn.jsx"
import { Input } from "../input/input"
import { ButtonSign } from "../button/button"
import { Logo } from "../../../../component/logo/logo.jsx"
import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { Otp } from "../../../../component/otp/otp.jsx"

import { useRegister } from "./hooks/useRegister.js"

import styles from "./register.module.css"




export const NoticeRegisterContext = createContext();
const Register = () => {

    const { login, otpDisplay, load, warn, form,
        handleChange, handleCheck, onSub } = useRegister();

    const [notice, setNotice] = useState(false);
    const [element, setElement] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (login) { 
            let time = setTimeout(() => {
                navigate('/');
            }, 3000)
            return () => time ? clearTimeout(time) : null;
        }
    }, [login]);

    return (
        <NoticeRegisterContext.Provider value={{ setElement, setNotice }}>
            <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com">
                {notice ? <Warn element={element} titleSuccess="Register Success" titleFail="Register Fail"
                    state={login} handleClick={setNotice} /> : null}
                {otpDisplay ? <Otp data={form} /> : null}
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
                            <h3 className={styles['login']}>Already have an  account? <Link to="/login">Log in</Link></h3>
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
        </NoticeRegisterContext.Provider>
    )
}
export { Register }
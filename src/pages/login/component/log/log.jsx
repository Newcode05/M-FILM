
import { Link } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { ButtonSign } from "../button/button"
import { Input } from "../input/input"
import { Logo } from "../../../../component/logo/logo.jsx"
import { Warn } from "../../../../layout/warn/warn.jsx"

import { useLog } from "./hooks/useLog.js"

import styles from "./log.module.css"

const LogIn = () => {

    const { login, text, load, warn, notice, elementNotice,
        setElementNotice, setNotice, handleChange, onSub } = useLog();
    return (
        <GoogleOAuthProvider clientId="81447679247-7n1fe6575offt2umqc17h5e02peb6h9u.apps.googleusercontent.com" >
            {notice ? <Warn element={elementNotice} state={login} handleClick={setNotice} /> : null}
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
                        /><div className={styles['text']}>{text}</div></h2>
                    <form action="" className={styles['form-login']} onSubmit={(e) => onSub(e)}>
                        <h3 className={styles['register']}><span>Don't have account?
                            <Link to="/register" className={styles['register-link']}> Register</Link></span>
                            <Link to="/forgotpassword" className={styles['forgot-password-link']}>Forgot Password ?</Link></h3>
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
                        <ButtonSign type="login" load={load} />
                        <div className={styles['login-title']}>Or login with</div>
                        <div className={styles['login']}>
                            <CustomLoginGoogle setElement={setElementNotice} setNotice={setNotice} />
                            <CustomApple />
                        </div>
                    </form>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}
export { LogIn }
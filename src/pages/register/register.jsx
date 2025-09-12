import { createContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { Warn } from "../../layout/warn/warn.jsx"
import { Input } from "../login/component/input/input.jsx"
import { ButtonSign } from "../login/component/button/button.jsx"
import { Logo } from "../../component/logo/logo.jsx"
import { CustomLoginGoogle } from "../login/component/google/google.jsx"
import { CustomApple } from "../login/component/apple/apple.jsx"
import { Otp } from "../../component/otp/otp.jsx"

import { useRegister } from "./hooks/useRegister.js"
import { useTranslation } from "react-i18next"

import styles from "./register.module.css"




export const NoticeRegisterContext = createContext();
const Register = () => {
    const { t } = useTranslation("register");
    const { login, otpDisplay, loading, warn, form,
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
                {otpDisplay ?
                    <Otp
                        data={form}
                        getOtp={{ url: "/register/getOtp", data: { ...form } }}
                        verifyOtp={{ url: "/register/verifyOtp/user" }} />
                    : null}
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
                            {t("Register")}
                        </h2>
                        <form action="" className={styles['form-contain']} onSubmit={(e) => onSub(e)}>
                            <h3 className={styles['login']}>{t("Already have an account?")} <Link to="/auth/login">{t("Log in")}</Link></h3>
                            <div className={styles['name']}>
                                <Input customClass={styles["name"]}
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    autoComplete="given-name"
                                    handleChange={handleChange}
                                    warn={warn === 1 ? t("firstname_invalid") : ""} />
                                <Input customClass={styles["name"]}
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    autoComplete="family-name"
                                    handleChange={handleChange}
                                    warn={warn === 2 ? t("lastname_invalid") : ""} />
                            </div>
                            <Input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                autoComplete="email"
                                handleChange={handleChange}
                                warn={warn === 3 ? t("email_invalid") : warn == 6 ? t("email_exists") : ""} />
                            <Input
                                type="password"
                                name="password"
                                placeholder="abc@123"
                                autoComplete="new-password"
                                handleChange={handleChange}
                                warn={warn === 4 ? t("password_invalid") : ""} />
                            <Input
                                type="checkbox"
                                name="term"
                                handleChange={handleCheck}
                                warn={warn === 5 ? t("checkbox_invalid") : ""}
                            />
                            <ButtonSign load={loading} />
                            <div className={styles['register-title']}>{t("Or register with")}</div>
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

import { Link } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { CustomLoginGoogle } from "../google/google"
import { CustomApple } from "../apple/apple"
import { ButtonSign } from "../button/button"
import { Input } from "../input/input"
import { Logo } from "../../../../component/logo/logo.jsx"
import { Warn } from "../../../../layout/warn/warn.jsx"
import { Tooltip } from "../../../../component/tooltip/test/tooltip.jsx"

import { useText } from "../../../../component/animation/text type/hooks/text.js"
import { useLog } from "./hooks/useLog.js"
import { useTranslation } from "react-i18next"

import styles from "./log.module.css"

const LogIn = () => {
    const { t } = useTranslation("login");
    const { text } = useText("Log In");
    const { login, loading, warn, notice, elementNotice,
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
                        <h3 className={styles['register']}><span>{t("Don't have account?")}&nbsp;
                            <Link to="/auth/register" className={styles['register-link']}>{t("Register")}</Link> </span>
                            <Link to="/forgotpassword" className={styles['forgot-password-link']}>{t("Forgot Password ?")}</Link></h3>
                        <Tooltip content="Email">
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="email"
                                warn={warn == 1 ? t("email_invalid") : ""}
                                handleChange={handleChange}
                            />
                        </Tooltip>
                        <Input
                            type="password"
                            name="password"
                            placeholder="abc@123"
                            autoComplete="current-password"
                            warn={warn == 2 ? t("password_invalid") : ""}
                            handleChange={handleChange}
                        />
                        <ButtonSign type="login" load={loading} />
                        <div className={styles['login-title']}>{t("Or login with")}</div>
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
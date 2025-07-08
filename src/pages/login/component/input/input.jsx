import React, { forwardRef } from "react";
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./input.module.css"


export const Input = forwardRef(({ type = "text", name = "", warn = "*Invalid", placeholder = "Email", customStyle, customClass, handleChange = () => { } }, ref) => {
    const [see, setSee] = useState(false);
    const { t } = useTranslation(["login", "register"]);
    return (
        type == "checkbox" ?
            <div className={` ${styles['input-default']} ${styles['term']}`} warn={warn}>
                <input
                    className={`${styles['term-checkbox']}`}
                    type="checkbox"
                    name={name}
                    onChange={(e) => handleChange(e)} />
                {t("I agree to", { ns: "register" })}<a href="/"> {t("the Terms&Conditions", { ns: "register" })}</a>
            </div>
            : type == "password" ?
                <div className={`${styles['input-default']}  ${customClass}`} warn={warn}>
                    <input
                        style={customStyle}
                        type={see ? "text" : "password"}
                        name={name}
                        warn={warn}
                        className={`${styles['input']} ${styles['input-password']} `}
                        onChange={(e) => handleChange(e)}
                        placeholder={placeholder}
                        autoComplete="new-password"
                        required />
                    <div
                        style={{ backgroundImage: `url(${see ? '/Login/Form/eye.png' : '/Login/Form/eye-closed.png'})` }}
                        className={styles['eye']}
                        onClick={() => setSee(prev => !prev)}
                    ></div>
                </div>
                : <div className={`${styles['input-default']} ${customClass}`} warn={warn} >
                    <input
                        ref={ref}
                        style={customStyle}
                        type={type}
                        name={name}
                        warn={warn}
                        className={`${styles['input']} `}
                        onChange={(e) => handleChange(e)}
                        placeholder={t(placeholder, { ns: ["login", "register"] })}
                        required />
                </div >
    )
})

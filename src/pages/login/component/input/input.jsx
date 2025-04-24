import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./input.module.css"

function Input({ type = "text", name = "", warn = "*Invalid", placeholder = "Email", customStyle, customClass, handleChange = () => { } }) {
    const [see, setSee] = useState(false);
    return (
        type == "checkbox" ?
            <div className={` ${styles['input-default']} ${styles['term']}`} warn={warn}>
                <input className={`${styles['term-checkbox']}`}
                    type="checkbox"
                    name={name}
                    onChange={(e) => handleChange(e)} />
                I agree to <a href="/"> the Term&Conditions</a>
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
                        style={customStyle}
                        type={type}
                        name={name}
                        warn={warn}
                        className={`${styles['input']} `}
                        onChange={(e) => handleChange(e)}
                        placeholder={placeholder}
                        required />
                </div >
    )
}
export { Input }


import { Poster } from "../component/poster/poster"
import { LogIn } from "../component/log/log"
import { Register } from "../component/register/register"

import styles from "./form.module.css"
const Form = ({ type = "register" }) => {
    return (
        <div className={styles['custom-login']}>
            <div className={styles['poster-column']}>
                <Poster />
            </div>
            <div className={styles['form-column']}>
                {type == "register" ? <Register /> : <LogIn />}
            </div>
        </div>
    )
}
export { Form }
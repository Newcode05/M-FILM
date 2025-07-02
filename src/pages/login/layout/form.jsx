import { Poster } from "../component/poster/poster"

import styles from "./form.module.css"
export const Form = ({ children }) => {
    return (
        <div className={styles['custom-login']}>
            <div className={styles['poster-column']}>
                <Poster />
            </div>
            <div className={styles['form-column']}>
                {children}
            </div>
        </div>
    )
}

import { Link } from "react-router-dom"
import styles from "./back.module.css"
export const ButtonBack = () => {
    return (
        <div className={styles['button-back']}>
            <Link to="/">Back to Website</Link>
        </div>
    )
}

import { Link } from "react-router-dom"
import styles from "./back.module.css"
function ButtonBack() {
    return (
        <div className={styles['button-back']}>
            <Link to="/">Back to Website</Link>
        </div>
    )
}
export { ButtonBack }
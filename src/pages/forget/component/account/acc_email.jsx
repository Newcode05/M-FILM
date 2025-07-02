import { Link } from "react-router-dom";
import styles from "./acc_email.module.css";
export const AccEmail = ({ email = "manhpham771977@gmail.com" }) => {
    return (
        <div className={styles['acc-email']}>
            <Link to="/forgotpassword">
                <span className={styles['bg']}></span>
                <span className={styles['content']}> {email}</span>
            </Link>
        </div>
    )
}
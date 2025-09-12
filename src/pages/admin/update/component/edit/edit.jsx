
import { useVideoController } from "../../hooks/useVideoController"
import styles from "./edit.module.css"
import { Link } from "react-router-dom";
export const Edit = () => {
    return (
        <Link to="/upload" className={styles['edit']}></Link>
    )
}

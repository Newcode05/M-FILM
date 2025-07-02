
import styles from "./next.module.css"
const Next = ({ customClass = "", disable = false }) => {

    return (
        <button type="submit" className={`${styles["button-next"]} ${customClass}`} disabled={disable}>Next</button>
    )
}
export { Next }
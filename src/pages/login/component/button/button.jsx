import styles from "./button.module.css";
import { Snipper } from "../loading_snipper/snipper";
function ButtonSign({ type = "sign in", load = true, customStyle, handleClick = () => { } }) {
    return (
        <button
            type="submit"
            style={{ ...customStyle }}
            className={styles['button']}
            onClick={handleClick}
        >
            <Snipper load={load} />
            {load ? '' : type === "sign in" ? "Create account" : "Log in"}</button>
    )
}
export { ButtonSign }
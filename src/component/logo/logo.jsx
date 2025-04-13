
import styles from "./logo.module.css";
function Logo({ customStyle, handleClick }) {
    return (
        <div style={{ ...customStyle }} className={styles['logo']} onClick={handleClick}> </div>
    )
}
export { Logo };
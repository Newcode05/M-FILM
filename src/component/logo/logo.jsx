
import styles from "./logo.module.css";
function Logo({ customStyle={}, customClass = "", handleClick=()=> {} }) {
    return (
        <div style={{ ...customStyle }} className={`${styles['logo']} ${customClass}`} onClick={handleClick}> </div>
    )
}
export { Logo };
import styles from "./snipper.module.css";

export const Snipper = ({ load = true, customStyle = {} }) => {
    const loadStyle = {
        opacity: load ? '1' : '0',
    }
    return (
        <div style={{ ...loadStyle, ...customStyle }} className={styles['snipper']} ></div >
    )
}
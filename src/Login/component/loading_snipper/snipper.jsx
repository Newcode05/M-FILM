import styles from "./snipper.module.css";

function Snipper({ customStyle }) {

    return (
        <div style={{ ...customStyle }} className={styles['snipper']} ></div >
    )
}
export { Snipper };
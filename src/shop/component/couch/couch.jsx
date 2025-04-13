import styles from "./couch.module.css"
function Couch({ index, customStyle = {} }) {
    return (
        <div style={{ transform: `rotate(${index * 10}deg)`, ...customStyle }} className={styles['couch']}>
        </div>
    )
}
export { Couch }
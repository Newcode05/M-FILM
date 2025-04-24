import styles from "./switch.module.css";
const Switch = ({ indexActive = 0, setIndexActive = () => { }, customStyle = {} }) => {
    return (
        <div style={{ ...customStyle }} className={styles['switch']}>
            {[...Array(3)].map((item, index) =>
                <span key={index}
                    className={`${styles['item']} ${index === indexActive ? styles['active-item'] : ''}`}
                    onClick={() => setIndexActive(index)}
                ></span>
            )}
        </div>
    )
}
export { Switch }
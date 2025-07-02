
import styles from "./star.module.css";
function Star({ star = 5.0 }) {
    let count = (star * 10).toString() + "%";
    console.log(count);
    return (
        <div className={styles['star-contain']}>
            <div style={{ width: count }} className={styles['star-wrapper']}>
                <div className={styles['item-wrapper']}></div>
                <div className={styles['item-wrapper']}></div>
                <div className={styles['item-wrapper']}></div>
                <div className={styles['item-wrapper']}></div>
                <div className={styles['item-wrapper']}></div>
            </div>
            <div className={styles['star']}>
                <div className={styles['item-star']}></div>
                <div className={styles['item-star']}></div>
                <div className={styles['item-star']}></div>
                <div className={styles['item-star']}></div>
                <div className={styles['item-star']}></div>
            </div>
        </div>
    )
}
export { Star };
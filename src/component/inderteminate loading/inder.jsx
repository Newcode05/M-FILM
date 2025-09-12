import styles from "./inder.module.css"

export const InderLoading = ({ loading = true, customClass = {} }) => {
    return (
        loading ?
            <div className={styles['loading-container']}>
                <div className={styles['bar-1']}></div>
                <div className={styles['bar-2']}></div>
                 <div className={styles['bar-3']}></div>
            </div> : null
    )
}
import styles from "./refresh.module.css"
const Refresh = ({ refresh, time, warn, handleRefresh = () => { } }) => {
    return (
        <div className={styles['time-refresh']}>
            <img className={`${styles['refresh']} ${refresh ? styles['refresh-ani'] : ""}`}
                onClick={handleRefresh}
                src="/Otp/revision-regular-60.png" width="20" height="20" alt="refresh-otp" />
            <div style={{ color: time.min === 0 && time.sec <= 30 ? 'red' : '' }}
                className={styles['time']} >{time.min}<span>:</span>{time.sec}</div>
            <div className={styles['warn']}> {warn ? warn : ""}</div>
        </div>
    )
}
export { Refresh }
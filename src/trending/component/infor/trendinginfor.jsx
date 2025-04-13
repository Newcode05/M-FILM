import styles from "./trendinginfor.module.css";
function TrendingInfor({ infor }) {
    return (
        <div className={styles['trending-infor']}>
            <h3 className={styles['name']}>{infor.name}</h3>
            <div className={styles['bookmark']}></div>
            <div className={styles['details']}>
                <div className={styles['infor']}>
                    <span className={styles['star']}>{infor.star}</span>
                    <span className={styles['view']}>{infor.view}</span>
                </div>
                <div className={styles['time']}>1h 30mins | action</div>
            </div>
        </div>
    )
}
export { TrendingInfor };
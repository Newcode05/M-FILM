

import styles from "./discription.module.css"
function DiscriptionMovie({ video = null }) {
    return (
        <div className={styles['discription-movie']}>
            <div className={styles['movie-name']}>{video.title}</div>
            <div className={styles['movie-infor']}>
                <div className={styles['session']}>Seasson 1 </div>
                <div className={styles['episode']}></div>
            </div>
            <div className={styles['actor-list']}>
                {[...Array(5)].map((actor, index) =>
                    <Actor key={index} />
                )}
            </div>
            <div className={styles['discription']}>{video.description}</div>
        </div>
    )
}
function Actor() {
    return (
        <div className={styles['actor']}>

        </div>
    )
}
export { DiscriptionMovie }
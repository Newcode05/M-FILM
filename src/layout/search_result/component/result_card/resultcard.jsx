import { Link } from "react-router-dom";
import styles from "./resultcard.module.css";

function ResultCard({ video = null }) {
    return (
        <>
            {!video ?
                <div className={styles['skeleton-card']}>
                    <div className={styles['skeleton-poster']}></div>
                    <div className={styles['skeleton-title']}></div>
                </div> :
                <div className={styles['result-card']}>
                    <Link className={styles['watch']} to={`/watch/${video.id}`}></Link>
                    <img className={styles['video-poster']}
                        src="/public/Img-Poster/Khi cuoc doi cho ban qua quyt 2.jpg"
                        alt={`poster-${video.title}`}
                        draggable="false" />
                    <div className={styles['video-title']}>{video.title}</div>
                </div>
            }
        </>
    )
}
export { ResultCard };
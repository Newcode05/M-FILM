import { Edit } from "../edit/edit"
import styles from "./infor.module.css"
export const VideoEpisode = () => {
    return (
        <div className={styles['video-contain']}>
            <div className={styles['video']}>
                <video src=""></video>
                <img className={styles['poster']} src="/Img-Poster/poster-ngang-movide-26.jpg" alt="poster" draggable="false" />
            </div>
            <div className={styles['video-infor']}>
                <div className={styles['title']}>The new day in the forest</div>
                <div className={styles['episode']}>Ep 1</div>
                <div className={styles['duration']}>1h 20min </div>
                <div className={styles['time-update']}>Time up: 23-04-2025 12:30:49</div>
                <Edit />
            </div>
        </div>
    )
}
export const Infor = () => {
    return (
        <div className={styles['infor-video']}>
            <div className={styles['season-contain']}>Season</div>
            <div className={styles['list-video']}>
                {[...Array(6)].map((_, index) =>
                    <VideoEpisode key={index} />
                )}
            </div>
        </div>
    )
}
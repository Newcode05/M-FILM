import { DetailButton } from "../details/details"
import styles from "./videocard.module.css"
const VideoCard = () => {
    return (
        <div className={styles["card-contain"]}>
            <div className={styles['video-contain']}>
                <video src="/Movie/Mavka.mp4" preload="metadata" className={styles['video']} controls></video>
                <img src="/Img-Poster/mavkar-3.jpg" alt="" className={styles['poster']} />
            </div>
            <div className={styles['video-infor']}>
                <div className={styles['title']}>Mavkar</div>
                <div className={styles['description']}>The new day in UR, in the forest.... Mavkar is a girl in the country</div>
                <div className={styles['type-contain']}>Type: Movie</div>
                <div className={styles['category-contain']}>
                    <div className={styles['category-item']}>Dramatic</div>
                    <div className={styles['category-item']}>Fantasy</div>
                </div>
                <div className={styles['season-contain']}>Season count: 12</div>
                <div className={styles['episode-contain']}>Episode: 10</div>
            </div>
            <DetailButton customStyle={{ position: 'absolute',left:'50%', bottom: '0px', transform: 'translate(-50%, 50%)' }} />
        </div>
    )
}
export { VideoCard }
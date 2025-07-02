import { useState } from "react"
import { DetailButton } from "../details/details"
import { Infor } from "../infor/inforvideo"
import styles from "./videocard.module.css"
const VideoCard = ({ video }) => {
    const [detail, setDetail] = useState(false)
    return (
        <div className={styles["card-contain"]}>
            <div className={styles['general']}>
                <div className={styles['video-contain']}>
                    <video src={`http://localhost:8000/api/${video.url}`} preload="metadata" className={styles['video']} controls></video>
                    <img src={`http://localhost:8000/storage/${video['poster_hor']}`} alt="" className={styles['poster']} />
                </div>
                <div className={styles['video-infor']}>
                    <div className={styles['title']}>{video.title}</div>
                    <div className={styles['description']}>{video.description}</div>
                    <div className={styles['type-contain']}>Type: Movie</div>
                    <div className={styles['category-contain']}>
                        {video['categories_count'] > 0 ? video.categories.map((card, index) =>
                            <div key={index} className={styles['category-item']}>{card.type}</div>
                        ) : null}
                    </div>
                    <div className={styles['season-contain']}>{`Season count: ${video['season_count']}`}</div>
                    <div className={styles['episode-contain']}>{`Episode count: ${video['episode_count']}`}</div>

                </div>
                <DetailButton on={detail} handleClick={setDetail} customStyle={{ position: 'absolute', left: '50%', bottom: '0px', transform: 'translate(-50%, 50%)' }} />
            </div>
            {detail ? <Infor /> : null}
        </div>
    )
}
export { VideoCard }
import { VideoCard } from "../video/videocard"
import styles from "./listvideo.module.css"
const ListVideo = ({ video  }) => {
    return (
        <div className={styles['list-video']}>
            {video.length > 0 ? video.map((card, index) =>
                <VideoCard key={index} video={card} />
            ) : "Chưa có video nào đc tải lên "}
        </div>
    )
}
export { ListVideo }
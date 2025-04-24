import { VideoCard } from "../video/videocard"
const ListVideo = () => {
    return (
        <div className={styles['list-video']}>
            {[...Array(6)].map((card, index) =>
                <VideoCard key={index} />
            )}
        </div>
    )
}
export { ListVideo }
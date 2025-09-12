import { useContext } from "react";
import { VideoPlayContext } from "../watching/watching";
import styles from "./active.module.css";
function Active() {
    const { play, setPlay } = useContext(VideoPlayContext);
    return (
        <div className={styles['active']}>
            <div
                style={{
                    backgroundImage: `url(${play ? '/Control/pause-regular-36.png' : '/Control/play-regular-36.png'})`
                }}
                className={styles['play-pause']}
                onClick={() => setPlay(prev => !prev)}></div>
            <div className={styles['prev']}></div>
            <div className={styles['next']}></div>
        </div>
    )
}
export { Active };
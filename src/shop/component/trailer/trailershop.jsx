import { useState, useRef, useEffect } from "react";
import { Button } from "../../../trailer/component/button/button";
import styles from "./trailershop.module.css";
function TrailerShop() {
    const [videoPlay, setVideoPlay] = useState(false);
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            if (videoPlay && videoRef.current.paused) {
                videoRef.current.play();
            }
            else {
                videoRef.current.pause();
            }
        }
    }, [videoPlay]);
    return (
        <div className={styles["trailer-contain"]}>
            <video ref={videoRef} className={styles['trailer']} src="/public/Trailer/MAVKA. THE FOREST SONG. Official Trailer.mp4" autoPlay ></video>
            <img className={styles['poster']} src="" alt="poster" />
            <Button
                customStyle={{
                    position: 'absolute',
                    padding: '10px 20px',
                    left: '20px',
                    bottom: '20px',
                    backgroundColor: "rgba(181,271,36,0.7)",
                    color: 'black',
                    fontSize: '1.4rem',
                    zIndex: '50'
                }}
                text="Watch trailer"
                size="none"
                handleClick={() => setVideoPlay(prev => !prev)}
            />
        </div>
    )
}
export { TrailerShop };
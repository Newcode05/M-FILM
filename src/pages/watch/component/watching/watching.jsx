import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BoxControl } from "../box-control/boxcontrol";


import styles from "./watching.module.css"
export const VideoPlayContext = createContext();
export const ScreenContext = createContext();
export const TimeContext = createContext();
function Watching({ video = {} }) {
    const [screen, setScreen] = useState(false);
    const [play, setPlay] = useState(true);
    const [interact, setInteract] = useState(false);
    const [time, setTime] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const watchRef = useRef(null);
    const videoRef = useRef(null);
    const videoDuraction = useRef(null);
    useEffect(() => {
        console.log(seekTime);
        if (videoRef.current && videoDuraction.current) {
            videoRef.current.currentTime = seekTime / 100 * videoDuraction.current;
        }
    }, [seekTime]);
    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setScreen(false);
            }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        if (screen && watchRef.current) {
            watchRef.current.requestFullscreen();
        }
        else if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }, [screen]);

    useEffect(() => {
        if (videoRef.current) {
            if (interact && play && videoRef.current.paused) {
                videoRef.current.play().catch(err => console.log(err));
            }
            else if (!play && !videoRef.current.paused) videoRef.current.pause();
        }
    }, [play, interact]);

    const interactHandle = () => {
        setInteract(true);
        if (videoRef.current) videoRef.current.muted = false;
        setPlay(true);
    }
    const onVideoPlay = () => {
        if (videoRef.current) {
            let c = videoRef.current.currentTime * 100 / videoDuraction.current;
            setTime(c.toFixed(2))
        }
    }
    return (
        <ScreenContext.Provider value={{ screen, setScreen }}>
            <VideoPlayContext.Provider value={{ play, setPlay }}>
                <TimeContext.Provider value={{ time, setTime, seekTime, setSeekTime }}>
                    <div ref={watchRef} className={styles['watching']}>
                        <div className={styles['video-contain']}>
                            <video
                                ref={videoRef}
                                src={`http://localhost:8000/api/${video.url}`}
                                className={styles['video']}
                                muted
                                preload="metadata"
                                onTimeUpdate={onVideoPlay}
                                onLoadedMetadata={(e) => videoDuraction.current = e.target.duration}
                            ></video>
                            {interact ? <BoxControl /> : null}
                        </div>
                        {!interact ? <img
                            src={`http://localhost:8000/storage/${video['poster_hor_url']}`}
                            alt="poster"
                            className={styles['poster']} /> : null}
                        {!interact ? <div className={styles['button-interact']} onClick={interactHandle}></div> : null}

                    </div>
                </TimeContext.Provider>
            </VideoPlayContext.Provider>
        </ScreenContext.Provider >
    )
}
export { Watching };
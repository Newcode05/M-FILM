import { createContext, useEffect, useRef, useState } from "react";
import { BoxControl } from "../box-control/boxcontrol";
import "./test.css";
import styles from "./watching.module.css"
export const VideoPlayContext = createContext();
export const ScreenContext = createContext();
export const TimeContext = createContext();
function Watching() {
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
                videoRef.current.play();
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
                        <video
                            ref={videoRef}
                            src="/public/FIlm/Mavka.The.Forest.Song.2023.DUBBED.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4"
                            className={styles['video']}
                            muted
                            onTimeUpdate={() => onVideoPlay()}
                            onLoadedMetadata={(e) => videoDuraction.current = e.target.duration}
                        ></video>
                        {!interact ? <img
                            src="/public/Img-Poster/mavkar-3.jpg"
                            alt="poster"
                            className={styles['poster']} /> : null}
                        {!interact ? <div className={styles['button-interact']} onClick={interactHandle}></div> : null}
                        {interact ? <BoxControl /> : null}
                    </div>
                </TimeContext.Provider>
            </VideoPlayContext.Provider>
        </ScreenContext.Provider >
    )
}
export { Watching };
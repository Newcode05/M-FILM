import { useState, useRef, useEffect, useContext } from "react";
import { TimeContext } from "../watching/watching";
import styles from "./control.module.css";

function Control() {
    const { time, setTime, setSeekTime } = useContext(TimeContext);
    const [isDragging, setIsDragging] = useState(false);
    const rangeRef = useRef(null);
    const pointRef = useRef(null);
    useEffect(() => {
        if (pointRef.current && rangeRef.current) {
            pointRef.current.style.left = `${time}%`;
            rangeRef.current.style.background = `linear-gradient(to right, red ${time}%, gray ${time}%)`;
        }
    }, [time])
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const rect = rangeRef.current.getBoundingClientRect();
            let percent = ((e.clientX - rect.left) / rect.width) * 100;
            percent = Math.max(0, Math.min(100, percent));
            setTime(percent);
            setSeekTime(percent);
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    const handleClick = (e) => {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        let percent = ((e.clientX - rect.left) / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));
        setTime(percent);
        setSeekTime(percent);
    };

    return (
        <div className={styles['control-contain']}>
            <div
                ref={rangeRef}
                className={styles["control-track"]}
                onClick={handleClick}
            ></div>
            <div
                ref={pointRef}
                className={styles.pointer}
                onMouseDown={() => setIsDragging(true)}
            ></div>
        </div>
    );
}

export { Control };

import { useState, useRef, useEffect } from "react";
import styles from "./switch.module.css"
function Switch({ size = "md", count = 4, customStyle, index, setIndex }) {
    let direction = useRef(null);
    const runRef = useRef(null);
    const widthDot = 8;
    const gap = 20;
    let time;
    useEffect(() => {
        console.log('a');
        if (runRef.current) {
            if (direction.current == 'right') {
                runRef.current.style.width = "36px";
                clearTimeout(time);
                time = setTimeout(() => {
                    console.log('a');
                    if (runRef.current) {
                        runRef.current.style.width = "8px";
                        runRef.current.style.left = `${16 + index * (gap + widthDot)}px`;
                    }
                    clearTimeout(time);
                }, 300);
            }
            else if (direction.current == 'left') {
                let left = runRef.current.style.left.split('px');
                runRef.current.style.right = `${124 - left[0] - 8}px`;
                runRef.current.style.left = "unset";
                runRef.current.style.width = "36px";
                clearTimeout(time);
                time = setTimeout(() => {
                    if (runRef.current) {
                        runRef.current.style.width = "8px";
                        runRef.current.style.left = `${16 + index * (gap + widthDot)}px`;
                        runRef.current.style.right = "unset";
                    }
                    clearTimeout(time);
                }, 300);
            }
        }
    }, [index]);
    const clickHandle = (a) => {
        setIndex(prev => {
            if (a > prev) {
                direction.current = 'right';

            }
            else if (a < prev) {
                direction.current = 'left';
                if (prev == 0) runRef.current.left = "16px";
            }
            else { direction.current = 'null'; }
            return a;
        });

    }
    return (
        <div style={customStyle} className={styles['switch-container']}>
            <span ref={runRef} className={styles['run']}></span>
            {[...Array(count)].map((child, key) =>
                <span key={key} className={`${styles['item']}`} onClick={() => clickHandle(key)}></span>
            )}
        </div>
    )
}
export { Switch };
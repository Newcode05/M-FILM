import { useState, useEffect } from "react";
import styles from "./warn.module.css";
const Warn = () => {
    const [count, setCount] = useState(3);
    useEffect(() => {
        let time = setInterval(() => {
            setCount(prev => {
                if (prev <= 0) {
                    clearInterval(time);
                    return '0';
                };
                return prev - 1;
            });
        }, 1000);
        return () => time ? clearInterval(time) : null
    }, [])
    return (
        <div className={styles['warn-layout']} >
            <div className={styles['warn-contain']}>
                <img src="/public/Warn/check-circle-regular-144.png" width="60" height="60" className={styles['img-icon']} alt="check-box" />
                <div className={styles['warn-content']}>
                    <div className={styles['warn']}>Login Success</div>
                    <div className={styles['navigate']}>{`Will navigate to Home after... ${count}s `}</div>
                </div>
            </div>
        </div >
    )
}
export { Warn }
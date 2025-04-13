import { useState, useRef, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LoadingContext } from "../App";
import styles from "./loading.module.css";

function Loading() {
    const { loading, setLoading } = useContext(LoadingContext);
    const [loadStep, setLoadStep] = useState(0);
    const [display, setDisplay] = useState(true);
    const timeRef = useRef(null);
    const url = useLocation();
    const src = url.pathname;
    console.log(src);
    useEffect(() => {
        setDisplay(false);
        setTimeout(() => {
            setLoadStep(0);
            setDisplay(true);
        }, 500);
        if (timeRef.current) {
            clearInterval(timeRef.current);
        }
        timeRef.current = setInterval(() => {
            setLoadStep(prev => {
                if (prev > 100) {
                    setDisplay(false);
                    clearInterval(timeRef.current);
                    setLoading(false);
                    console.log('clear 2');
                    return 0;
                }
                return prev + Math.random() * 10
            });
            console.log('interval');
        }, 500);

        return () => timeRef.current ? clearInterval(timeRef.current) : 0
    }, [src]);
    return (
        <div className={styles['loading-contain']}>
            <div style={{ transform: `scaleX(${loadStep / 100})`, opacity: display ? '1' : '0' }} className={styles['loading']}></div>
        </div>
    )
}
export { Loading }
import { useState, useRef, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { useLoading } from "../../Providers/Context/LoadingContext";
import styles from "./loading.module.css";

function Loading() {
    const { setLoading } = useLoading();
    const [loadStep, setLoadStep] = useState(0);
    const [display, setDisplay] = useState(true);
    const timeRef = useRef(null);
    const url = useLocation();
    useEffect(() => {
        setLoading(true);
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
                let a = prev + Math.random() * 20;
                if (prev > 100) {
                    clearInterval(timeRef.current);
                    return 0;
                }
                return a;
            });
        }, 500);

        return () => timeRef.current ? clearInterval(timeRef.current) : 0
    }, [url.pathname]);
    useEffect(() => {
        if (loadStep > 100) {
            setLoadStep(0);
            setLoading(false);
            setDisplay(false)
            clearInterval(timeRef.current);
        }
    }, [loadStep]);
    return (
        <div className={styles['loading-contain']}>
            <div style={{ transform: `scaleX(${loadStep / 100})`, opacity: display ? '1' : '0' }} className={styles['loading']}></div>
        </div>
    )
}
export { Loading }
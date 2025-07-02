import { useState, useEffect } from "react";
import { SuccessSvg } from "./component/success/success";
import { FailSvg } from "./component/fail/fail";
import styles from "./warn.module.css";
const Warn = ({ element = "", titleSuccess = "Login Success", titleFail = "Login Fail", state = true, handleClick = () => { } }) => {
    const [count, setCount] = useState(3);
    useEffect(() => {
        if (state) {
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
        }
    }, []);
    return (
        <div className={styles['warn-layout']} >

            <div className={styles['warn-contain']}>
                {state ? <SuccessSvg customClass={styles['img-icon']} /> : <FailSvg customClass={styles['img-icon']} />}
                {!state ? <div className={styles['exit']} onClick={() => handleClick(prev => !prev)}></div> : null}
                <div className={styles['warn-content']}>
                    <div className={styles['warn']}>{state ? titleSuccess : titleFail}</div>
                    <div className={styles['element']}>{element}</div>
                    {state ?
                        <div className={styles['navigate']}>{`Will navigate to Home after... ${count}s `}</div> : null
                    }
                </div>
            </div>
        </div >
    )
}
export { Warn }
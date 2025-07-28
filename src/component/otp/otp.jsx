import { useContext, useEffect } from "react";


import { Snipper } from "../../pages/login/component/loading_snipper/snipper";
import { Refresh } from "./component/refresh/refresh";

import { useOtpInput } from "./hooks/useOtpInput";
import { useOtp } from "./hooks/useOtp";
import { useAuth } from "../../Providers/Context/AuthContext";
import { useLogIn } from "../../Providers/Context/LoginContext";



import styles from "./otp.module.css";


/** 
 * Otp logic
 *@param {object} data -data of account

*/
const Otp = (
    {
        count = 6,
        getOtp = {},
        verifyOtp = {},
        data = {},
        onSubmit = {}
    }
) => {
    const { otp, setOtp, inputRef, warnOtp, handleChange, handleKeyDown, setWarnOtp, } = useOtpInput(count);
    const { loadingGet, loadingVerify, warnRefresh, formatTime, verifyOtpFn, refreshOtp, startCountdown } = useOtp({ setWarnOtp: setWarnOtp, getOtp: getOtp, verifyOtp: verifyOtp });
    const { min, sec } = formatTime();

    const onSub = (e) => {
        e.preventDefault();
        const dataOtp = {
            ...data, 'otp': otp.join("")
        }
        verifyOtpFn({
            url: verifyOtp.url,
            data: dataOtp
        });
    }
    useEffect(() => {
        startCountdown();
    }, []);
    return (
        <div className={styles['otp-container']}>
            <form className={styles['form-otp']} onSubmit={(e) => onSub(e)}>
                <h3 className={styles['title']}>Enter OTP code</h3>
                <div className={styles["otp-list"]}>
                    {[...Array(6)].map((_, index) =>
                        <input
                            key={index}
                            ref={(el) => inputRef.current[index] = el}
                            className={warnOtp ? styles['input-stroke'] : ''}
                            type="text"
                            maxLength="1"
                            inputMode="numberic"
                            value={otp[index]}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            required />
                    )}
                </div>
                <Refresh data={data}
                    warn={warnRefresh}
                    refresh={loadingGet}
                    time={{ 'min': min, 'sec': sec }}
                    handleRefresh={() => refreshOtp(data, warnOtp, setOtp, setWarnOtp)} />
                <div className={styles['warn-otp']}>{warnOtp ? <><span>*</span>{warnOtp}</> : ""}</div>
                <button className={styles['button-sub']} type="submit" disabled={loadingVerify}>
                    <Snipper load={loadingVerify} />
                    {loadingVerify ? "" : "Send OTP"}</button>
            </form>
        </div>
    )
}
export { Otp }
import { useContext, useEffect } from "react";

import { Snipper } from "../../pages/login/component/loading_snipper/snipper";
import { useOtpInput } from "./hook/useOtpInput";
import { useOtp } from "./hook/useOtp";
import { useAuth } from "../../Providers/Context/AuthContext";
import { useLogIn } from "../../Providers/Context/LoginContext";
import { NoticeRegisterContext } from "../../pages/login/component/register/register";
import { Refresh } from "./component/refresh/refresh";
import styles from "./otp.module.css";


/** 
 * Otp logic
 *@param {object} data -data of account

*/
const Otp = ({ data }) => {
    const { setLogin } = useAuth();
    const { setUser } = useLogIn();
    const { setElement, setNotice } = useContext(NoticeRegisterContext);
    const { otp, setOtp, inputRef, warnOtp, handleChange, handleKeyDown, setWarnOtp, } = useOtpInput();
    const { loading, warnRef, refresh, setLoading, formatTime, refreshOtp, verifyOtp, startCountdown } = useOtp();
    const { min, sec } = formatTime();
    const onSub = (e) => {
        e.preventDefault();
        const dataOtp = {
            ...data, 'otp': otp.join("")
        }
        const url = "register/verifyOtp/user";
        verifyOtp(url, dataOtp)
            .then(res => {
                setLoading(false);
                if (res.data.status === 'success') {
                    setLogin(true);
                    const { user } = res.data;
                    setUser({ ...user });
                    setNotice(true);
                    setElement('Register success');
                }

            })
            .catch(err => {
                {
                    setLoading(false);
                    if (err.response) {
                        const { status, message } = err.response;
                        if (status === 404) {
                            setWarnOtp("Not found");
                        } else if (status === 400) {
                            setWarnOtp("OTP is incorrect");
                        } else if (status === 422) {
                            setWarnOtp("OTP is expired");
                        } else if (status === 429) {
                            setWarnOtp("Too many requests. Please try again.")
                        }
                        else {
                            setWarnOtp("Lỗi không xác định: " + message);
                        }
                    } else {
                        setWarnOtp("Not connect to server");
                    }
                }
            })

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
                    warn={warnRef}
                    refresh={refresh}
                    time={{ 'min': min, 'sec': sec }}
                    handleRefresh={() => refreshOtp("/getOtp", data, warnOtp, setOtp, setWarnOtp)} />
                <div className={styles['warn-otp']}>{warnOtp ? <><span>*</span>{warnOtp}</> : ""}</div>
                <button className={styles['button-sub']} type="submit" onClick={() => setLoading(true)}>
                    <Snipper load={loading} />
                    {loading ? "" : "Send OTP"}</button>
            </form>
        </div>
    )
}
export { Otp }
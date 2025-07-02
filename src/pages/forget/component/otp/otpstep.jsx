import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { InderLoading } from "../../../../component/inderteminate loading/inder";
import { AccEmail } from "../account/acc_email";
import { OtpInput } from "../../../../component/otp/component/input/input";
import { Refresh } from "../../../../component/otp/component/refresh/refresh";
import { OtpWarn } from "../../../../component/otp/component/warn/warn";
import { Next } from "../next/next";

import { useOtpInput } from "../../../../component/otp/hook/useOtpInput";
import { useOtp } from "../../../../component/otp/hook/useOtp";
import { useForget } from "../hook/useForget";


import styles from "./otpstep.module.css";



const OtpStep = () => {
    const { otp, warnOtp, inputRef, setOtp, setWarnOtp, handleChange, handleKeyDown } = useOtpInput();
    const { loading, warnRef, refresh, setLoading, formatTime, refreshOtp, verifyOtp, startCountdown } = useOtp();
    const { fetchStep } = useForget();
    const { token, email } = useParams();
    const [vali, setVali] = useState(false);
    const { min, sec } = formatTime();
    const navigate = useNavigate();
    const onSub = (e) => {
        e.preventDefault();
        const data = {
            'token': token,
            'otp': otp.join("")
        }
        setLoading(true);
        verifyOtp('/forgot-password/otp', data)
            .then(res => {
                setLoading(false);
                if (res.data.status === 'success') {
                    navigate(`/forgotpassword/password/${token}/${btoa(atob(email))}`);
                }
            })
            .catch(err => {
                setLoading(false);
                if (err.response) {
                    const { status, data } = err.response;
                    console.log(data);
                    if (status === 404) {
                        setWarnOtp("Not found");
                    } else if (status === 422) {
                        setWarnOtp(data.message);
                    } else if (status === 400) {
                        setWarnOtp("OTP is incorrect");
                    } else {
                        setWarnOtp("Lỗi không xác định: " + data.message);
                    }
                } else {
                    setWarnOtp("Not connect to server");
                }
            })
    }
    useEffect(() => {
        fetchStep(token)
            .then(res => {
                if (res.data['step'] === 'otp') {
                    setVali(true);
                    startCountdown();
                }
            });
    }, []);
    return (
        vali ?
            <form className={styles['otp-step']} onSubmit={(e) => onSub(e)}>
                <AccEmail email={atob(email)} />
                <InderLoading loading={loading} />
                <h2 className={styles['title']}>Enter your OTP</h2>
                <OtpInput
                    inputRef={inputRef}
                    otp={otp}
                    warnOtp={warnOtp}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                />
                <Refresh
                    refresh={refresh}
                    time={{ min, sec }}
                    data=""
                    warn={warnRef}
                    handleRefresh={() => refreshOtp("/refresh/getOtp", { 'token': token, 'otp': otp.join("") }, warnOtp, setOtp, setWarnOtp)} />
                <OtpWarn warnOtp={warnOtp} />
                <Next customClass={styles['button-next']} disable={otp.filter((digit) => digit !== "").length !== 6} />
            </form> : <div
                style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '1.8rem' }}
            >Please try again</div>
    )
}
export { OtpStep }
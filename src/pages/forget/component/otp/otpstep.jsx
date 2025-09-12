import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { InderLoading } from "../../../../component/inderteminate loading/inder";
import { AccEmail } from "../account/acc_email";
import { OtpInput } from "../../../../component/otp/component/input/input";
import { Refresh } from "../../../../component/otp/component/refresh/refresh";
import { OtpWarn } from "../../../../component/otp/component/warn/warn";
import { Next } from "../next/next";

import { useOtpInput } from "../../../../component/otp/hooks/useOtpInput";
import { useOtp } from "../../../../component/otp/hooks/useOtp";



import styles from "./otpstep.module.css";



const OtpStep = () => {
    const { otp, warnOtp, inputRef, setOtp, setWarnOtp, handleChange, handleKeyDown } = useOtpInput();
    const { loading, warnRef, refresh, setLoading, formatTime, refreshOtp, verifyOtp, startCountdown } = useOtp();
    const { email } = useParams();
    const { min, sec } = formatTime();
    const navigate = useNavigate();
    useEffect(() => {
        startCountdown();
    }, []);
    const onSub = (e) => {
        e.preventDefault();
        const data = {
            'otp': otp.join(""),
            'email': atob(email)
        }
        setLoading(true);
        verifyOtp('/forgotpassword/verifyotp', data)
            .then(res => {
                setLoading(false);
                const { reset_token } = res.data;
                if (res.data.status === 'success') {
                    navigate(`/forgotpassword/password/${email}/${reset_token}`);
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
    return (
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
                handleRefresh={() => refreshOtp("/refresh/getOtp", { 'otp': otp.join("") }, warnOtp, setOtp, setWarnOtp)} />
            <OtpWarn warnOtp={warnOtp} />
            <Next customClass={styles['button-next']} disable={otp.filter((digit) => digit !== "").length !== 6} />
        </form> /* <div
                style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '1.8rem' }}
            >Please try again</div>*/
    )
}
export { OtpStep }
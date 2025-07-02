import styles from "./warn.module.css"
export const OtpWarn = ({ warnOtp }) => {
    return(
        <div className={styles['warn-otp']}>{warnOtp ? <><span>*</span>{warnOtp}</> : ""}</div>
    )
}
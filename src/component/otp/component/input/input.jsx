import styles from "./input.module.css";
export const OtpInput = ({
    inputRef,
    otp,
    count = 6,
    warnOtp,
    customClassName = styles['input-stroke'],
    handleChange = () => { }, handleKeyDown = () => { } }) => {
    return (
        <div className={styles['otp-list']}>
            {
                [...Array(count)].map((_, index) =>
                    <input
                        key={index}
                        ref={(el) => inputRef.current[index] = el}
                        className={`${styles['otp-input']} ${warnOtp ? customClassName : ""}`}
                        type="text"
                        maxLength="1"
                        inputMode="numberic"
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        required />
                )
            }
        </div>
    )
}
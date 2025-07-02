import { useState, useRef } from "react";

/**
 * Control input OTP-
 * @param {number} count - count of OTP
 * 
 * @returns {{
 * otp:number, 
 * setOTP:function, 
 * warnOtp:string,
 * setWarnOtp:string,
 * inputRef,
 * handleChange:function,
 * handleKeyDown:function
 * }}
 */
export const useOtpInput = (count = 6) => {
    const [otp, setOtp] = useState(Array(count).fill(""));
    const [warnOtp, setWarnOtp] = useState(false);
    const inputRef = useRef([]);


    const handleChange = (e, index) => {
        if (!/^[0-9]*$/.test(e.target.value)) return;
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        if (index + 1 < count && e.target.value) {
            inputRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (warnOtp) setWarnOtp(false);
        console.log('a');
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
            inputRef.current[index - 1]?.focus();
        }
    };

    return { otp, setOtp, warnOtp, setWarnOtp, inputRef, handleChange, handleKeyDown };
};
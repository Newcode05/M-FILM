import { useState, useEffect, useRef } from "react";

import { useGetOtpMutation, useVerifyOtpMutation } from "../services/useOtpService";

import { instance } from "../../../Providers/axiosClient";

export const useOtp = ({
    setWarnOtp = () => { },
    getOtp = {},
    verifyOtp = {}
} = {}) => {

    const [time, setTime] = useState();
    const [warnRefresh, setwarnRefresh] = useState(false);
    const intervalRef = useRef(null);

    const mutationGetOtp = useGetOtpMutation({
        options: {
            onSuccess: (data) => {

                if (warnRefresh) setwarnRefresh(false);
                if (data["status"] === 'success') {
                    console.log(data);
                    sessionStorage.setItem('timeOtp', data.time);
                    setTime(Math.floor(getTimeLife(data.time) / 1000));
                    startCountdown();
                    console.log(sessionStorage.getItem('timeOtp'));
                }
                else {
                    setwarnRefresh('Get OTP error');
                }
                getOtp.onSuccess ? getOtp.onSuccess() : null;
            },
            onError: (err) => {
                if (err?.response) {
                    const { status, data } = err.response;
                    if (status === 404) {
                        setwarnRefresh(data.message);
                    }
                    if (status === 422) {
                        setwarnRefresh(data.message);
                    }
                }
                setwarnRefresh(err.message);
                getOtp?.onError(err);
            }
        }
    });
    const mutationVerifyOtp = useVerifyOtpMutation({
        onSuccess: (data) => {
            verifyOtp?.onSuccess(data);
        },
        options: {
            onError: (err) => {
                if (err?.response) {
                    const { status, message } = err.response;
                    if (status === 404) {
                        setWarnOtp("Not found");
                    } else if (status === 400) {
                        setWarnOtp("OTP is incorrect");
                    } else if (status === 422) {
                        setWarnOtp("OTP is incorrect");
                    } else if (status === 429) {
                        setWarnOtp("Too many requests. Please try again.")
                    }
                    else {
                        setWarnOtp("Lỗi không xác định: " + message);
                    }
                } else {
                    setWarnOtp("Not connect to server");
                }
                verifyOtp?.onError(err);
            }
        }
    });
    const loadingGet = mutationGetOtp.isPending;
    const loadingVerify = mutationVerifyOtp.isPending;

    useEffect(() => {
        const timeExpires = sessionStorage.getItem('timeOtp');
        if (timeExpires) {
            const timeSet = getTimeLife(timeExpires) / 1000;
            setTime(timeSet <= 0 ? 0 : Math.floor(timeSet));

        }
        return () => clearInterval(intervalRef.current);
    }, []);

    /*Time life of OTP*/
    const getTimeLife = (time) => {
        return time * 1000 - Date.now();
    }

    /*Format time to sync wih backend*/
    const formatTime = () => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return { min, sec: sec >= 10 ? sec : "0" + sec };
    };

    const startCountdown = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev > 0) return prev - 1;
                clearInterval(intervalRef.current);
                return 0;
            });
        }, 1000);
    };

    const verifyOtpFn = ({ url, data }) => mutationVerifyOtp.mutate({ url: url, data: data });

    /*Get new OTP*/
    const refreshOtp = (data, warnOtp, setOtp, setWarnOtp) => {
        if (warnOtp) setWarnOtp(false);
        if (warnRefresh) setwarnRefresh(false);
        setOtp(prev => prev.map(() => ""));
        mutationGetOtp.mutate({ url: getOtp.url, data: getOtp.data });
    }
    return {
        warnRefresh,
        loadingGet,
        loadingVerify,
        verifyOtpFn,
        setwarnRefresh,
        refreshOtp,
        formatTime,
        startCountdown
    };
};
import { useState, useEffect, useRef } from "react";

import { intance } from "../../../Providers/axiosClient";

export const useOtp = () => {
    const [time, setTime] = useState();
    const [loading, setLoading] = useState(false);
    const [warnRef, setWarnRef] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const intervalRef = useRef(null);

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
    /*Format time to sync with backend*/
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

    const getOtp = (url = "/getOtp", data) => {
        return intance.post(url, data);
    };

    const verifyOtp = (url, data) => {
        return intance.post(url, data);
    };
    /*Get new OTP*/
    const refreshOtp = (url = "", data, warnOtp, setOtp, setWarnOtp) => {
        if (warnOtp) setWarnOtp(false);
        if (warnRef) setWarnRef(false);
        setRefresh(true);
        setOtp(prev => prev.map(() => ""));
        intance.post(`${url}`, data)
            .then(res => {
                if (warnRef) setWarnRef(false);
                setRefresh(false);
                if (res.data['status'] === 'success') {
                    sessionStorage.setItem('timeOtp', res.data.time);
                    setTime((Math.floor(getTimeLife(res.data.time) / 1000)));
                    startCountdown();
                }
                else {
                    setWarnRef('Get OTP error');
                }
            })
            .catch(err => {
                if (err.response) {
                    const { status, data } = err.response;
                    if (status === 404) {
                        setWarnRef(data.message);
                    }
                    if (status === 422) {
                        setWarnRef(data.message);
                    }

                }
                setWarnRef(err.message);
            })
    }

    return { time, loading, warnRef, refresh, setWarnRef, setLoading, refreshOtp, formatTime, getOtp, verifyOtp, startCountdown };
};
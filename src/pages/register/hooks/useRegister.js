import { useState } from "react";

import { useLogIn } from "../../../Providers/Context/LoginContext";
import { useOtp } from "../../../component/otp/hooks/useOtp";
import { useValidate } from "../../login/hooks/useForm";


import { useGetOtpMutation } from "../../../component/otp/services/useOtpService";
/**
 * 
 * @returns {
 * load: boolean, 
 * handleChange: () => void,
 * handleCheck: () => void,
 * onSub: () => void
 * }
 */

export const useRegister = () => {

    const { login } = useLogIn();
    const { checkRegister } = useValidate();

    const [otpDisplay, setOtpDisplay] = useState(false);
    const [warn, setWarn] = useState(null);
    const [form, setForm] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'term': '',
        'type': 'local'
    });
    const mutationGetOtp = useGetOtpMutation({
        options: {
            onSuccess: (data) => {
                if (data['status'] === 'success') {
                    sessionStorage.setItem('timeOtp', data['time']);
                    setOtpDisplay(true);
                }
            },
            onError: (err) => {
                setWarn(6);
            }
        }
    });
    const loading = mutationGetOtp.isPending;

    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }));
    }

    const handleCheck = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.checked }));

    const onSub = (e) => {
        e.preventDefault();
        if (!checkRegister(form, setWarn)) {
            return;
        }
        mutationGetOtp.mutate({ url: "/register/getOtp", data: { ...form } });
    }
    return { loading, login, warn, form, otpDisplay, handleChange, handleCheck, onSub }
}
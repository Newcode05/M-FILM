import { useState } from "react";

import { useLogIn } from "../../../Providers/Context/LoginContext";
import { useOtp } from "../../../component/otp/hook/useOtp";
import { useValidate } from "../../login/hooks/useForm";


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
    const { getOtp } = useOtp();
    const { checkRegister } = useValidate();
    const [otpDisplay, setOtpDisplay] = useState(false);
    const [load, setLoad] = useState(false);
    const [warn, setWarn] = useState(null);
    const [form, setForm] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'term': '',
        'type': 'local'
    });

    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }));
    }
    const handleCheck = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.checked }));

    const onSub = (e) => {
        e.preventDefault();
        setLoad(true);
        if (!checkRegister(form, setWarn)) {
            setLoad(false);
            return;
        }
        const data = {
            ...form
        }
        const response = getOtp("/register/getOtp", data);
        response.then(res => {
            setLoad(false);
            if (res.data['status'] === 'success') {
                sessionStorage.setItem('timeOtp', res.data['time']);
                setOtpDisplay(true);
            }
            else {
                setWarn(6);
                setLoad(false);
            }
        }).catch(err => {
            setLoad(false);
            setWarn(6);
        })


    }
    return { load, login, warn, form, otpDisplay, handleChange, handleCheck, onSub }
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValidate } from "../../../../login/hooks/useForm";
import { intance } from "../../../../../Providers/axiosClient"


export const useEmailStep = () => {
    const { checkEmail } = useValidate();
    const [email, setEmail] = useState("");
    const [warn, setWarn] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const fetchEmail = () => {
        const data = {
            'email': email
        }
        intance.post('/forgot-password', data)
            .then(res => {
                setLoading(false);
                console.log(res);
                if (res.data['status'] === 'success') {
                    sessionStorage.setItem('timeOtp', res.data['time']);
                    navigate(`/forgotpassword/otp/${res.data.token}/${btoa(email)}`);
                }
                else {
                    console.log('Error');
                }
            }).catch(err => {
                setLoading(false);
                console.log(err.message);
            })
    }
    const onSub = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!checkEmail(email)) {
            setWarn('*Email is invalid');
            setLoading(false);
            return;

        }
        else {
            fetchEmail();
        }
    }

    return { warn, loading, onSub, handleChange }
}

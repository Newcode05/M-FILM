import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValidate } from "../../../../login/hooks/useForm";
import { useGetOtpMutation } from "../../../../../component/otp/services/useOtpService";
import { instance } from "../../../../../Providers/axiosClient"


export const useEmailStep = () => {
    const { checkEmail } = useValidate();
    const [email, setEmail] = useState("");
    const [warn, setWarn] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const getOtp = useGetOtpMutation({
        options: {
            onSuccess: (data) => {
                console.log(data);
                if (data['status'] === 'success') {
                    sessionStorage.setItem('timeOtp', data['time']);
                    navigate(`/forgotpassword/otp/${btoa(email)}`);
                }
                else {
                    console.log('Error');
                }
            },
            onError: (err) => {
                console.log(err.message);
            }
        }
    })
    const loading = getOtp.isPending;
    const fetchEmail = () => {
        const data = {
            'email': email
        }
        instance.post('/forgotpassword/getOtp', data)
            .then(res => {
                console.log(res);
                if (res.data['status'] === 'success') {
                    sessionStorage.setItem('timeOtp', res.data['time']);
                    navigate(`/forgotpassword/otp/${btoa(email)}`);
                }
                else {
                    console.log('Error');
                }
            }).catch(err => {
                console.log(err.message);
            })
    }
    const onSub = (e) => {
        e.preventDefault();
        if (!checkEmail(email)) {
            setWarn('*Email is invalid');
            return;

        }
        else {
            const data = {
                'email': email
            }
            getOtp.mutate({ url: "/forgotpassword/getOtp", data: data })
        }
    }

    return { warn, loading, onSub, handleChange }
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../../Providers/Context/AuthContext";
import { useLogIn } from "../../../../../Providers/Context/LoginContext";
import { useText } from "../../../../../component/animation/text type/hooks/text";
import { useValidate } from "../../../hooks/useForm";

import { intance } from "../../../../../Providers/axiosClient";
export const useLog = () => {
    const { setUser } = useAuth();
    const { login, setLogin } = useLogIn();
    const { checkLogin } = useValidate();
    const [form, setForm] = useState({
        "email": "",
        "password": ""
    });
    const { text } = useText("Log In");
    const [load, setLoad] = useState(false);
    const [warn, setWarn] = useState(0);
    const [notice, setNotice] = useState(false);
    const [elementNotice, setElementNotice] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (login) {
            let time = setTimeout(() => {
                navigate('/');
                setNotice(false);
            }, 3000);
            return () => time ? clearTimeout(time) : null;
        }

    }, [login]);
    useEffect(() => {
        if (warn != 0) {
            setWarn(0);
        }
    }, [form]);
    const onSub = (e) => {
        e.preventDefault();
        setLoad(true);
        if (!checkLogin(form, setWarn)) {
            setLoad(false);
        }
        else {
            intance.post('/login', {
                ...form
            })
                .then(res => {
                    setNotice(true);
                    if (res) {
                        setLoad(false);
                        if (res.data.message === "success") {
                            const { user } = res.data;
                            setUser({
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role
                            })
                            setLogin(true);
                        }
                        else {
                            setElementNotice("Email or password is incorrect");
                        }
                    }
                })
                .catch(err => {
                    setLoad(false);
                    setNotice(true);
                    setElementNotice(err.message);
                })

        }
    }
    const handleChange = (e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }))
    }
    return { login, text, load, warn, notice, elementNotice, setElementNotice, setNotice, handleChange, onSub }
}
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "../../../../../Providers/Context/AuthContext";
import { useLogIn } from "../../../../../Providers/Context/LoginContext";
import { useValidate } from "../../../hooks/useForm";

import { useLogMutation } from "../api/useLogMutation";

export const useLog = () => {
    const { setUser } = useAuth();
    const { login, setLogin } = useLogIn();
    const { checkLogin } = useValidate();
    const [form, setForm] = useState({
        "email": "",
        "password": ""
    });
    const [warn, setWarn] = useState(0);
    const [notice, setNotice] = useState(false);
    const [elementNotice, setElementNotice] = useState("");

    const navigate = useNavigate();

    const mutation = useLogMutation({
        onSuccess: (data) => {
            setNotice(true);
            const { user } = data;
            setUser({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            });
            setLogin(true);
        },
        onError: (err) => {
            setNotice(true);
            setElementNotice(err.message);
        }

    });

    const loading = mutation.isPending;
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

    const handleChange = useCallback((e) => {
        if (warn != null) setWarn(null);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value.trim() }))
    }, [warn, setWarn, setForm]);

    const onSub = useCallback((e) => {
        e.preventDefault();
        if (!checkLogin(form, setWarn)) {
            return;
        }
        mutation.mutate();
    }, [form, setWarn, mutation]);


    return { login, loading, warn, notice, elementNotice, onSub, setElementNotice, setNotice, handleChange }
}
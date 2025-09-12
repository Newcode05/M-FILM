import { useCallback, useEffect, useState } from "react";
import { useValidate } from "../../../../login/hooks/useForm";
import { instance } from "../../../../../Providers/axiosClient";
import { useTranslation } from "react-i18next";
export const usePasswordStep = () => {
    const { t } = useTranslation("login");
    const { checkPassword } = useValidate();
    const [loading, setLoading] = useState(false);
    const [warnPass, setWarnPass] = useState("");
    const [warnResPassword, setWarnResPassword] = useState("");
    const [form, setForm] = useState({
        'password': '',
        're-password': ''
    });
    const elWarn = t("password_invalid");
    const reWarn = t("repassword_invalid");

    useEffect(() => { console.log(form); console.log(warnPass) }, [form]);

    useEffect(() => {
        console.log("1");
    }, [warnPass]);

    const validateResPassword = (pass, repass) => {
        if (pass !== repass) {
            return false;
        }
        return true;
    }

    const handleChangePass = useCallback((e) => {
        setWarnPass("");
        const { name, value } = e.target;
        if (!checkPassword(value) && value.length > 0) setWarnPass(elWarn);
        else setWarnPass("");
        setForm(form => {
            return ({ ...form, [name]: value });
        });
    }, [])

    const handleChangeResPass = useCallback((e) => {
        setWarnResPassword('');
        const { name, value } = e.target;
        if (!validateResPassword(form['password'], e.target.value)) setWarnResPassword(reWarn);
        setForm(form => {
            return ({ ...form, [name]: value });
        })
    }, [])

    const onSub = useCallback((e, token) => {
        e.preventDefault();

        setLoading(true);
        if (!checkPassword(form['password'])
            || !checkPassword(form['re-password'])
            || !validateResPassword(form['password'], form['re-password'])) {
            setLoading(false);
        }
        else {
            const data = {
                ...form, 'token': token
            }
            instance.post('/forgotpassword/changepassword', data)
                .then(res => {
                    setLoading(false);
                    if (res.data.status === 'success') {
                        console.log('success');
                    }
                })
                .catch(err => {
                    setLoading(false);
                    if (err.response) {
                        const { status, message } = err.response;
                        if (status === '400') { }
                        if (status === '404') { }
                        if (status === '422') { }
                    }
                })
        }
    }, []);

    return { warnPass, warnResPassword, loading, handleChangePass, handleChangeResPass, onSub }
}
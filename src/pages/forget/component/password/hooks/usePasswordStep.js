import { useEffect, useState } from "react";
import { useValidate } from "../../../../login/hooks/useForm";
import { intance } from "../../../../../Providers/axiosClient";
export const usePasswordStep = () => {
    const { checkPassword } = useValidate();
    const [loading, setLoading] = useState(false);
    const [warnPass, setWarnPass] = useState("");
    const [warnResPassword, setWarnResPassword] = useState("");
    const [form, setForm] = useState({
        'password': '',
        're-password': ''
    });
    const elWarn = "* Password must include at least one [A-Z], one [a-z], [0-9],one special character.";
    const reWarn = "* Password and confirmation must be identical";
    useEffect(() => { console.log(form); console.log(warnPass) }, [form]);
    useEffect(() => {
        console.log(warnPass, warnResPassword);
    }, [warnPass]);
    const validatePassword = (password) => {

        if (!checkPassword(password)) {
            setWarnPass('* Password must include at least one [A-Z], one [a-z], [0-9],one special character.');
            return false;
        }
        return true;
    }
    const validateResPassword = (pass, repass) => {
        if (pass !== repass) {
            return false;
        }
        return true;
    }
    const handleChangePass = (e) => {
        setWarnPass('');
        const { name, value } = e.target;
        if (!validatePassword(value)) setWarnPass(elWarn);
        setForm(form => {
            return ({ ...form, [name]: value });
        });
    }
    const handleChangeResPass = (e) => {
        setWarnResPassword('');
        const { name, value } = e.target;
        if (!validateResPassword(form['password'], e.target.value)) setWarnResPassword(reWarn);
        setForm(form => {
            return ({ ...form, [name]: value });
        })
    }

    const onSub = (e, token) => {
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
            intance.post('/forgot-password/password', data)
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
    };
    return { warnPass, warnResPassword, loading, handleChangePass, handleChangeResPass, onSub }
}
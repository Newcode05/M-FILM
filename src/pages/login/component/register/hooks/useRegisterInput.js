import { useState } from "react"


export const useRegisterInput = () => {
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
    return { form, handleChange, handleCheck }
}
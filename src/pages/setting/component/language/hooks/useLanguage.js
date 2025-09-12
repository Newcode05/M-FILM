import {  useState } from "react";
import i18n from "i18next";
export const useLanguage = () => {
    const [lang, setLang] = useState(i18n.language);
    const handleChange = (value) => {
        setLang(value);
        i18n.changeLanguage(value);
    }
    return { lang, handleChange }
} 
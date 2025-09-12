
import { Snipper } from "../loading_snipper/snipper";
import { useTranslation } from "react-i18next";
import styles from "./button.module.css";
export const ButtonSign = ({ type = "register", load = true, customStyle, handleClick = () => { } }) => {
    const { t } = useTranslation(type);
    return (
        <button
            type="submit"
            style={{ ...customStyle }}
            className={styles['button']}
            onClick={handleClick}
        >
            <Snipper load={load} />
            {load ? '' : type === "register" ? t("Create account") : t("Log in")}</button>
    )
}

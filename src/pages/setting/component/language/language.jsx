import { useLanguage } from "./hooks/useLanguage"
import { DropDown } from "../../../../layout/dropdown/dropdown";
import styles from "./language.module.css"
export const Language = () => {
    const list = [
        { "title": "Vietnamese" },
        { "title": "English" },
        { "title": "Korea" }
    ];
    const { lang, handleChange } = useLanguage();
    return (
        <div className={styles["language-container"]}>
            <div className={styles["language-button"]}>Change language</div>
            <DropDown handleChange={handleChange} />
        </div>
    )
}
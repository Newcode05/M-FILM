import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import styles from "./tooltip.module.css"

export const Tooltip = ({ context = "", field = "", customStyle, customClass, size = "sm", text = "This is tooltip", children }) => {
    const { t } = useTranslation("tooltip");
    const [onHover, setOnHover] = useState(false);
    const onMouseEnter = () => {
        setOnHover(true);
    }
    const onMouseLeave = () => {
        setOnHover(false);
    }
    return (
        <div className={styles['tooltip-container']}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div style={customStyle} className={`${customClass} ${styles['tooltip']}`}>{t(`${context}.${field}`, { ns: "tooltip" })}</div>
            {children}
        </div>
    )
}

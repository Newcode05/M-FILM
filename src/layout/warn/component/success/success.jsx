import styles from "./success.module.css";
export const SuccessSvg = ({ customClass = "", customStyle ="" }) => {
    return (
        <svg style={{ ...customStyle }} className={`${styles['icon-container']} ${customClass}`} viewBox="0 0 64 64">
            <circle className={styles['circle']} cx="32" cy="32" r="28" />
            <path className={styles['check']} d="M20 34 L28 42 L44 26" />
        </svg>
    )
}
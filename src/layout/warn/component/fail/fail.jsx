import styles from "./fail.module.css";
export const FailSvg = ({ customStyle = "", customClass = "" }) => {
    return (
        <svg style={{ ...customStyle }} className={` ${styles['icon-container']} ${customClass}`} viewBox="0 0 64 64">
            <circle className={styles['circle']} cx="32" cy="32" r="28" />
            <path className={styles['check-1']} d="M20 20 L44 44" />
            <path className={styles['check-2']} d="M44 20 L20 44" />
        </svg>
    )
}
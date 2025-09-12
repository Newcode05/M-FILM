import { useText } from "./hooks/text"
import styles from "./text.module.css"
export const TextAnimation = () => {
    const { text } = useText();
    return (
        <div className={styles['text-animation']}>{text}</div>
    )
}
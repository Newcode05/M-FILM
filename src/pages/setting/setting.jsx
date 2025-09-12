import { Language } from "./component/language/language"
import styles from "./setting.module.css"
export const Setting = () => {
    return (
        <div className={styles['setting-layout']}>
            <div className={styles['setting-nav']}>
                <div>Language</div>
            </div>
            <Language />
        </div>
    )

}
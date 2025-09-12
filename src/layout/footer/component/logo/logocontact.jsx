
import { Logo } from "../../../../component/logo/logo"
import styles from "./logocontact.module.css"
function LogoContact() {
    return (
        <div className={styles['logo-contain']}>
            <div className={styles['logo']}>
                <Logo customClass={styles['responsive']} />
                <h2 className={styles['name']}>M FILM</h2>
            </div>
            <div className={styles['logo-infor']}>
                <a href="mailto:example@gmail.com">Contact to us: mfilm@gmail.com</a>
            </div>
        </div>
    )
}
export { LogoContact }
import { LogoContact } from "../component/logo/logocontact"
import { Document } from "../component/listtitle/listtitle"
import { IconContact } from "../component/contact/contact"
import styles from "./footer.module.css"
function Footer() {
    const contact = [
        { 'bg': '/Footer/facebook-logo-36 (1).png', 'src': '#' },
        { 'bg': '/Footer/tiktok-logo-36.png', 'src': '#' },
        { 'bg': '/Footer/twitter-logo-36 (1).png', 'src': '#' }
    ];
    return (
        <div className={styles['footer-contain']}>
            <div className={styles['footer-document']}>
                <LogoContact />
                <Document />
            </div>
            <hr />
            <div className={styles['footer-contact']}>
                <div className={styles['copyright']}>&copy;2023 M FILM</div>
                <div className={styles['contact']}>
                    {contact.map((icon, index) =>
                        <IconContact key={index} icon={icon} />
                    )}
                </div>
            </div>
        </div>
    )
}
export { Footer }
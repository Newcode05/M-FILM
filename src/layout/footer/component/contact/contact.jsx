
import styles from "./contact.module.css"
function IconContact({ icon }) {
    return (
        <div className={styles['icon-contact']}>
            <a style={{ backgroundImage: `url("${icon.bg}")` }} href={icon.src}></a>
        </div>
    )
}
export { IconContact }
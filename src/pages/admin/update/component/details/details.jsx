
import styles from "./details.module.css"
const DetailButton = ({ on = false, customStyle = {}, classCustom = "", handleClick = () => { } }) => {
    return (
        <div
            style={{
                backgroundImage: `url('${!on ? "/Upload/chevrons-down-regular-48 (1).png" :
                    "/Upload/chevrons-up-regular-48.png"}')`, ...customStyle
            }}
            className={styles['detail-contain']}
            onClick={() => handleClick(prev => !prev)}>
        </div>
    )
}
export { DetailButton }
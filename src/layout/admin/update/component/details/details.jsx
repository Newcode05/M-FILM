import { useState } from "react";
import styles from "./details.module.css"
const DetailButton = ({ customStyle = {}, classCustom = "", handleClick = () => { } }) => {
    const [on, setOn] = useState(true);
    return (
        <div
            style={{
                backgroundImage: `url('${on ? "/Upload/chevrons-down-regular-48 (1).png" :
                    "/Upload/chevrons-up-regular-48.png"}')`, ...customStyle
            }}
            className={styles['detail-contain']}
            onClick={() => setOn(prev => !prev)}>
        </div>
    )
}
export { DetailButton }
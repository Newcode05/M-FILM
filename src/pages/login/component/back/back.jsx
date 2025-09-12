import { Link } from "react-router-dom"
import styles from "./back.module.css"
import { Tooltip } from "../../../../component/tooltip/test/tooltip"
export const ButtonBack = () => {
    return (
        <Tooltip content="New days">
            <div className={styles['button-back']}>
                <Link to="/">Back to Website</Link>
            </div >
        </Tooltip>
    )
}


import { Control } from "../control/control";
import { Active } from "../active/active";
import { Screen } from "../screen/screen";
import styles from "./boxcontrol.module.css"
function BoxControl() {
    return (
        <div className={styles['box-control']}>
            <Control />
            <Active />
            <Screen/>
        </div>
    )
}
export { BoxControl };
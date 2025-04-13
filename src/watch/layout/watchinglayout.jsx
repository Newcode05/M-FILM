import { Watching } from "../component/watching/watching";
import { DiscriptionMovie } from "../component/discription/discription";
import styles from "./watchinglayout.module.css";
function WatchingLayout() {
    return (
        <div className={styles['watching-layout']}>
            <Watching />
            <DiscriptionMovie />
        </div>
    )
}
export { WatchingLayout }
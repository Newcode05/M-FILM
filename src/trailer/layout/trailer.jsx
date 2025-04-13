import { Trailer } from "../component/trailer/trailer"
import styles from "./trailer.module.css";
function TrailerLayout() {
    return (
        <section className={styles['trailer-layout']}>
            <Trailer />
        </section>
    )
}
export { TrailerLayout };
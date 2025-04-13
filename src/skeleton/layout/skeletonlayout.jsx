import styles from "./skeletonlayout.module.css"
import "./test1.css";
function SkeletonLayout() {
    return (
        <div className={styles['skeleton-contain']}>
            <div className={styles['skeleton-layout']}></div>
        </div>
    )
}
export { SkeletonLayout }
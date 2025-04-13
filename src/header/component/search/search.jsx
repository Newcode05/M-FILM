import styles from "./search.module.css"
function Search() {
    return (
        <div className={styles['search-contain']}>
            <div className={styles['search-button']}></div>
            <input className={styles['search']} type="text" placeholder="Search" />
        </div>
    )
}
export { Search };
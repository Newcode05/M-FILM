
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./search.module.css"

function Search() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const onSub = (e) => {
        e.preventDefault();
        console.log('name');
        if (search != "") {
            navigate(`/search?q=${encodeURIComponent(search)}`);
        }
    }
    return (
        <form className={styles['search-contain']} onSubmit={onSub}>
            <div className={styles['search-button']}></div>
            <input className={styles['search']}
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value.trim())}
            />
        </form>
    )
}
export { Search };
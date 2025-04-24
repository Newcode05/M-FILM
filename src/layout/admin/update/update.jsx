import { useState } from "react";
import styles from "./update.module.css"

function Update() {
    const [action, setAction] = useState('');
    return (
        <form action="" encType="multipart" className={styles['form']}>
            <label htmlFor="">Enter video name</label>
            <label htmlFor="">Enter season name</label>
            <input type="text" name="search" />
            <select className={styles['season']} name="season" id="">
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
                <option value="3">Season 3</option>
                <option value="4">Season 4</option>
            </select>
            <label htmlFor="file" className={styles['label-file']}>Choose video</label>
            <input className={styles['file']} id="file" type="file" name="video" accept="video/*" />

        </form>
    )
}
export { Update }
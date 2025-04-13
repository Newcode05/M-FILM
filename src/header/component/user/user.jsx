import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./user.module.css";
function User() {
    const [menu, setMenu] = useState(false);
    return (
        <div className={styles['user']} onClick={() => setMenu(prev => !prev)}>

            {menu ?
                <div className={styles['menu-user']}>
                    <div><Link to="/login">Log in</Link></div>
                    <div><Link to="/login">Log in</Link></div>
                    <div ><Link to="/login" style={{ backgroundImage: 'url("Header/log-in-regular-36.png")' }}>Log in</Link></div>
                </div> : null}
        </div>
    )
}
export { User };
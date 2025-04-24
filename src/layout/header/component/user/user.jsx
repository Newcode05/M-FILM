
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext, AuthContext } from "../../../../App";
import styles from "./user.module.css";
function User() {
    const { user } = useContext(AuthContext);
    const { login, setLogin } = useContext(LoginContext);
    const [menu, setMenu] = useState(false);
    return (
        <div style={user.bg ? { backgroundImage: `url(${user.bg ? user.bg : ''})` } : { backgroundSize: '24px' }} className={styles['user']} onClick={() => setMenu(prev => !prev)}>
            {menu ?
                <div className={styles['menu-user']}>
                    {login ?
                        <>
                            <h3 className={styles['user-infor']}>@{user.name}</h3>
                            <div><Link to="/login" className={styles["service"]}>Packages and services</Link></div>
                            <div><Link to="/login" className={styles['log-out']} onClick={() => { console.log('a'); setLogin(false) }}>Log out</Link></div>
                        </>
                        : <div><Link style={{ backgroundImage: 'url("Header/log-in-regular-36.png")' }} to="/login" > Log in</Link></div>}
                </div> : null
            }
        </div >
    )
}
export { User };
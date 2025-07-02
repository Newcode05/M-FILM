
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Providers/Context/AuthContext";
import { useLogIn } from "../../../../Providers/Context/LoginContext";
import styles from "./user.module.css";
function User() {
    const { user } = useAuth();
    const { login, setLogin } = useLogIn();
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
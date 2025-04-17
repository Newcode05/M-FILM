
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../../../App";
import { AuthContext } from "../../../App";
import styles from "./user.module.css";
function User() {
    const { user, setUser } = useContext(AuthContext);
    const { login, setLogin } = useContext(loginContext);
    const [menu, setMenu] = useState(false);
    return (
        <div className={styles['user']} onClick={() => setMenu(prev => !prev)}>
            {menu ?
                <div className={styles['menu-user']}>
                    {login ?
                        <>
                            <h3 className={styles['user-infor']}>@{user.name}</h3>
                            <div><Link to="/login">Packages and services</Link></div>
                            <div><Link to="/login" onClick={() => setLogin(false)}>Log out</Link></div>
                        </>
                        : <div><Link style={{ backgroundImage: 'url("Header/log-in-regular-36.png")' }} to="/login" > Log in</Link></div>}
                </div> : null
            }
        </div >
    )
}
export { User };
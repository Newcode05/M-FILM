
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../../../App";
import styles from "./user.module.css";
function User() {
    const { login, setLogin } = useContext(loginContext);
    const [menu, setMenu] = useState(false);
    return (
        <div className={styles['user']} onClick={() => setMenu(prev => !prev)}>

            {menu ?
                <div className={styles['menu-user']}>
                    {login ?
                        <>
                            <div><Link to="/login">Packages and services</Link></div>
                            <div><Link to="/Profile">Log out</Link></div>
                            <div ><Link to="/login" style={{ backgroundImage: 'url("Header/log-in-regular-36.png")' }}>Log in</Link></div>
                        </>
                        : <div><Link style={{ backgroundImage: 'url("Header/log-in-regular-36.png")' }} to="/login" > Log in</Link></div>}
                </div> : null
            }
        </div >
    )
}
export { User };
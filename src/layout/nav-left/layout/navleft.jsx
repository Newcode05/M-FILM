
import { createContext, useRef, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "../../../component/logo/logo";
import { Card } from "../component/card";
import { LoginContext, DisplayNavContext, AuthContext, DeviceContext } from "../../../App";
import styles from "./navleft.module.css";

export const NavLeftContext = createContext(null);
function NavLeft() {
    const tab = useLocation();
    const src = tab.pathname;
    const { user } = useContext(AuthContext);
    const { login } = useContext(LoginContext);
    const { displayNav, setDisplayNav } = useContext(DisplayNavContext);
    const [indexSelect, setIndexSelect] = useState(src);
    const { isDevice } = useContext(DeviceContext)
    const navRef = useRef(null);
    useEffect(() => {
        if (isDevice !== "desktop") {
            setDisplayNav(false);
        }
    }, []);
    useEffect(() => {
        if (navRef.current) {
            if (displayNav) {
                navRef.current.style.display = "block";
            }
            else {
                navRef.current.style.display = "none";
            }
        }
    }, [displayNav]);
    const list = [
        [
            { src: '/', 'element': 'Home', 'bg': '/Navleft/home-alt-regular-36.png', },
            { src: '#', 'element': 'Explore', 'bg': '/Navleft/compass-regular-36.png', },
            { src: '#', 'element': 'Favourite', 'bg': '/Navleft/heart-regular-36.png', },
        ],
        [
            { src: '/shop', 'element': 'Shop', 'bg': '/Navleft/store-regular-36 (1).png', }
        ],
        [
            { src: '#', 'element': 'Setting', 'name': 'icon-setting', 'bg': '/Navleft/cog-regular-36.png', },
            { src: '#', 'element': 'Trending', 'bg': '/Navleft/compass-regular-36.png', },
        ],
        user.role === 'admin' ?
            [
                { src: '/admin/upload', 'element': 'Upload', 'bg': '/Admin/upload-regular-36.png' },
                { src: '/admin/update', 'element': 'Update', 'bg': '/Admin/up-arrow-square-solid-36.png' },


            ] : [],
        isDevice == "tablet" || isDevice == "mobile" ?
            [
                !login ?
                    { src: '/login', 'element': 'Log in', 'bg': '/public/Header/log-in-regular-36.png' } :
                    { src: '/logout', 'element': 'Log out', 'bg': '/public/Logout/log-out-regular-36.png' }
            ] : []
    ];
    const nav = list.filter(arr => arr.length > 0);
    console.log(nav);
    console.log(user);
    return (
        <NavLeftContext.Provider value={{ indexSelect, setIndexSelect }}>
            {displayNav ?
                <nav ref={navRef} className={styles['nav-left']}>
                    <h2 className={styles['title-nav']}><Logo handleClick={() => setDisplayNav(prev => !prev)} />M FILM</h2>
                    {nav.map((card, index) =>
                        <Card key={index} card={card} end={index == (nav.length - 1) ? false : true} />
                    )}
                </nav> : null}

        </NavLeftContext.Provider>
    )
}
export { NavLeft }
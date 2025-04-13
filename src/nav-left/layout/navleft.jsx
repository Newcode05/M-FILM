
import { createContext, useRef, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "../../component/logo/logo";
import { Card } from "../component/card";
import { DisplayNavContext } from "../../App";
import styles from "./navleft.module.css";

export const NavLeftContext = createContext(null);
function NavLeft() {
    const tab = useLocation();
    const src = tab.pathname;
    const { displayNav, setDisplayNav } = useContext(DisplayNavContext);
    const [indexSelect, setIndexSelect] = useState(src);
    const navRef = useRef(null);
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
            { src: '#', 'element': 'Profile', 'bg': '/Navleft/heart-regular-36.png', },
        ],
        [
            { src: '/shop', 'element': 'Shop', 'bg': '/Navleft/store-regular-36 (1).png', }
        ],
        [
            { src: '#', 'element': 'Setting', 'name': 'icon-setting', 'bg': '/Navleft/cog-regular-36.png', },
            { src: '#', 'element': 'Trending', 'bg': '/Navleft/compass-regular-36.png', },
        ]
    ]
    const login = [{ src: '/Login', 'element': 'Login', 'bg': '/Header/log-in-regular-36.png', 'index': 6 }];
    return (
        <NavLeftContext.Provider value={{ indexSelect, setIndexSelect }}>
            {displayNav ?
                <nav ref={navRef} className={styles['nav-left']}>
                    <h2 className={styles['title-nav']}><Logo handleClick={() => setDisplayNav(prev => !prev)} />M FILM</h2>
                    {list.map((card, index) =>
                        <Card key={index} card={card} end={index == 2 ? false : true} />
                    )}
                    <Card card={login} end={false} customClass={styles['login']} />
                </nav> : null}

        </NavLeftContext.Provider>
    )
}
export { NavLeft }
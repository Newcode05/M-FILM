
import { useRef,  useEffect } from "react";
import { Logo } from "../../../component/logo/logo";
import { Card } from "../component/card";

import { useDisplayNav } from "../../../Providers/Context/DisplayNavContext";
import { useLogIn } from "../../../Providers/Context/LoginContext";
import { useDevice } from "../../../Providers/Context/DeviceContext";
import { useAuth } from "../../../Providers/Context/AuthContext";

import { NavLeftProvider } from "../../../Providers/Context/NavLeftContext";

import styles from "./navleft.module.css";


export const NavLeft = () => {
    const { user } = useAuth();
    const { login } = useLogIn();
    const { displayNav, setDisplayNav } = useDisplayNav();
    const { isDevice } = useDevice();
    const navRef = useRef(null);
    useEffect(() => {
        if (isDevice != "desktop") {
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
                    { src: '/login', 'element': 'Log in', 'bg': '/Header/log-in-regular-36.png' } :
                    { src: '/login', 'element': 'Log out', 'bg': '/Logout/log-out-regular-36.png' }
            ] : []
    ];
    const nav = list.filter(arr => arr.length > 0);
    return (
        <NavLeftProvider>
            {displayNav ?
                <nav ref={navRef} className={styles['nav-left']}>
                    <h2 className={styles['title-nav']}><Logo handleClick={() => setDisplayNav(prev => !prev)} />M FILM</h2>
                    {nav.map((card, index) =>
                        <Card key={index} card={card} end={index == (nav.length - 1) ? false : true} />
                    )}
                </nav> : null}
        </NavLeftProvider>

    )
}

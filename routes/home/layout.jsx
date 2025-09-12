import { Outlet } from "react-router-dom";

import { Header } from "../../src/layout/header/layout/header";
import { NavLeft } from "../../src/layout/nav-left/layout/navleft";
import { Loading } from "../../src/component/loading/loading";

import { useDisplayNav } from "../../src/Providers/Context/DisplayNavContext";
import { useDevice } from "../../src/Providers/Context/DeviceContext";

export const Layout = () => {
    const { displayNav } = useDisplayNav();
    const { isDevice } = useDevice();
    const homeStyle = isDevice == "desktop" ? {
        width: displayNav ? 'calc(100% - 325px)' : 'calc(100% - 50px)',
        left: displayNav ? '300px' : '25px'
    } : {};
    return (
        <>
            <Header />
            <NavLeft />
            <Loading />
            <main style={{ ...homeStyle }}>
                <Outlet />
            </main>
        </>
    )
}
import { useContext } from "react";
import { Sort } from "../../component/sort/sort";
import { Search } from "../../component/search/search";
import { Notice } from "../../component/notice/notice";
import { User } from "../../component/user/user";
import { DisplayNavContext, DesktopContext } from "../../../App";
import styles from "./header.module.css";
function Header() {
    const { displayNav, setDisplayNav } = useContext(DisplayNavContext);
    const { isDesktop } = useContext(DesktopContext);
    const headerStyle = isDesktop ? {
        width: displayNav ? 'calc(100% - 300px)' : 'calc(100% - 100px)',
        left: displayNav ? '300px' : '100px'
    } : {
        width: 'calc(100% - 100px)',
        left: '100px'
    };
    return (
        <div style={headerStyle} className={styles['header-contain']}>
            <Sort />
            <Search />
            <Notice />
            <User />

        </div>
    )
}
export { Header };
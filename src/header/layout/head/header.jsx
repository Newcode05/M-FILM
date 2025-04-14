import { useContext } from "react";
import { Logo } from "../../../component/logo/logo";
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
        width: displayNav ? 'calc(100% - 275px)' : 'calc(100% - 100px)',
        left: displayNav ? '275px' : '100px'
    } : {
        width: 'calc(100% - 100px)',
        left: '100px'
    };
    return (
        <div className={styles['header-contain']}>
            {!displayNav ?
                <Logo customStyle={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }} handleClick={() => setDisplayNav(prev => !prev)} /> : null}

            <div style={headerStyle} className={styles['search-box']}>
                <Sort />
                <Search />
                <Notice />
                <User />
            </div>
        </div>
    )
}
export { Header };
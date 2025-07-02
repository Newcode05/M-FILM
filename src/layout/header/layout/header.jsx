
import { Logo } from "../../../component/logo/logo";
import { Sort } from "../component/sort/sort";
import { Search } from "../component/search/search";
import { Notice } from "../component/notice/notice";
import { User } from "../component/user/user";

import { useDisplayNav } from "../../../Providers/Context/DisplayNavContext";
import { useDevice } from "../../../Providers/Context/DeviceContext";

import styles from "./header.module.css";

function Header() {
    const { displayNav, setDisplayNav } =useDisplayNav();
    const { isDevice } = useDevice();
    const filter = [
        { 'title': 'All', },
        { 'title': 'Single' },
        { 'title': 'Series' }
    ]
    const searchStyle = isDevice == 'desktop' ? {
        width: displayNav ? 'calc(100% - 275px)' : 'calc(100% - 100px)',
        left: displayNav ? '275px' : '100px'
    } : {

    }
    return (
        <div className={styles['header-contain']}>
            {!displayNav ?
                <Logo customStyle={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }} handleClick={() => setDisplayNav(prev => !prev)} /> : null}

            <div style={searchStyle} className={styles['search-box']}>
                <Sort options={filter} type="circle" classCustom={styles['sort']} />
                <Search />
                <Notice />
                <User />
            </div>
        </div>
    )
}
export { Header };
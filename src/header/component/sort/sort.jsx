
import { useEffect, useState, useRef } from "react";
import styles from "./sort.module.css";
function Sort() {
    const [sort, setSort] = useState('All');
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        if (menuRef.current) {
            if (menu) {

                menuRef.current.style.height = "160px";
                menuRef.current.style.borderRadius = '0px';
            }
            else {

                menuRef.current.style.height = "40px";
                menuRef.current.style.borderRadius = '50px';
            }
        }
    }, [menu]);

    return (
        <div className={styles['sort-contain']} onClick={() => setMenu(prev => !prev)}>
            <div ref={menuRef} className={styles['sort-wrapper']}>
                <div style={{ backgroundImage: `url("${menu ? '/Header/chevron-up-regular-36.png' : '/Header/chevron-down-regular-36.png'}")` }} className={styles['sort-selected']}>{sort}</div>
                {menu ?
                    <div className={styles['list-sort']}>
                        <div>All</div>
                        <div>Single</div>
                        <div>Series</div>
                    </div> : null}
            </div>
        </div>
    )
}
export { Sort };
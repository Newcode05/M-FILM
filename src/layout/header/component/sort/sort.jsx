
import { useEffect, useState, useRef } from "react";
import styles from "./sort.module.css";
function Sort({ options, type = "square", classCustom, styleCustom, onClick = () => { } }) {
    const [sort, setSort] = useState('All');
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        if (options.length > 0) {
            setSort(options[0].title);
        }
    }, []);
    useEffect(() => {
        if (menuRef.current) {
            if (menu) {

                menuRef.current.style.height = "160px";
                menuRef.current.style.borderRadius = '0px';
            }
            else {

                menuRef.current.style.height = "40px";
                menuRef.current.style.borderRadius = type === "square" ? "0px" : "50px";
            }
        }
    }, [menu]);

    return (
        <div style={{ borderRadius: type == "square" ? '0px' : '50px' }} className={`${styles['sort-contain']} ${classCustom}`} onClick={() => setMenu(prev => !prev)}>
            <div ref={menuRef} style={{ ...styleCustom }} className={styles['sort-wrapper']}>
                <div style={{ backgroundImage: `url("${menu ? '/Header/chevron-up-regular-36.png' : '/Header/chevron-down-regular-36.png'}")` }} className={styles['sort-selected']}>{sort}</div>
                {menu ?
                    <div className={styles['list-sort']}>
                        {options.length > 0 ? options.map((option, index) => {
                            return <div className={styles['sort-item']} style={{ animationDelay: `${0.3*index}s` }} key={index} onClick={() => { onClick(option.title); setSort(option.title) }}>{option.title}</div>
                        }) : null}
                    </div> : null}
            </div>
        </div>
    )
}
export { Sort };
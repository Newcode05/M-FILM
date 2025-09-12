
import { useSort } from "./hooks/useSort.js";
import styles from "./sort.module.css";
/**
 * 
 * @param {Array<{title:string}>} options -Array options
 * @param {string} [type="square"] -Type of shape
 * @param {string} [classOpen] -Class when menu open
 * @param {string} [classClose] -Class when menu close 
 * @param {string} [classCustom] -Class customer
 * @param {React.CSSProperties} [styleCustom]
 * @param {(title:string)=>void} onClick -Event when selected
 * @returns {JSX.Element}
 */

export const Sort = ({ options = [], type = "square", classOpen, classClose, classCustom, styleCustom, onClick = () => { } }) => {
    const { selected, open, wrapperRef, setOpen, handleSelect } = useSort(options[0]?.title || "default");
    return (
        <div style={{ borderRadius: type == "square" ? '0px' : '50px' }} className={`${styles['sort-contain']} ${classCustom}`} onClick={() => setOpen(prev => !prev)}>
            <div ref={wrapperRef} style={{ ...styleCustom }}
                className={`${styles['sort-wrapper']} ${open ? styles['open'] : styles['close']}`}>
                <div
                    style={{ backgroundImage: `url("${open ? '/Header/chevron-up-regular-36.png' : '/Header/chevron-down-regular-36.png'}")` }}
                    className={styles['sort-selected']}>{selected}</div>
                {open ?
                    <div className={styles['sort-list']}>
                        {options.length > 0 ? options.map((option, index) => {
                            return <div className={styles['sort-item']} style={{ animationDelay: `${0.3 * index}s` }}
                                key={index}
                                onClick={(e) => { e.stopPropagation(); onClick(option.title); handleSelect(option.title) }}
                            >{option.title}</div>
                        }) : null}
                    </div> : null}
            </div>
        </div >
    )


}

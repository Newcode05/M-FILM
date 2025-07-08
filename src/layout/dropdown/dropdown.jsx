import { useDropdown } from "./hooks/useDropdown";

import styles from "./dropdown.module.css"
export const DropDown = ({ classCustom, list = [], handleChange = () => { } }) => {
    list = [
        {
            "title": "Vietnamese",
            "key": "vi"
        },
        {
            "title": "English",
            "key": "en"
        },
        {
            "title": "Campuchia",
            "key": "en"
        }];
    const { open, setOpen,
        selected, handleSelect } = useDropdown("English");
    return (
        list.length > 0 ?
            <div className={styles['dropdown-container']}>
                <div className={styles['dropdown-wrapper']}>
                    <div
                        className={styles['dropdown-selected']}
                        style={{ backgroundImage: `url("${open ? '/Header/chevron-up-regular-36.png' : '/Header/chevron-down-regular-36.png'}")` }}
                        onClick={() => setOpen(prev => !prev)}>
                        {selected}
                    </div>
                    {open ? <div className={styles['dropdown-list']}>
                        {
                            list.map((obj, index) =>
                                <div key={index}
                                    onClick={(e) => { e.stopPropagation(); handleSelect(obj.title); handleChange(obj.key); }}>{obj.title}</div>
                            )
                        }
                    </div> : null}
                </div>
            </div> : null
    )
}
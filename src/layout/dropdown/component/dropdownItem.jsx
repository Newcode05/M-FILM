import styles from "./dropdownItem.module.css"
export const DropDownItem = ({ option, handleClick = () => { } }) => {
    return (
        <div className={styles['dropdown-item']}
            onClick={(e) => { e.stopPropagation(); handleClick() }}>
            {option}
        </div>
    )
}
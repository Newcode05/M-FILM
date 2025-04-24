
import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button({ customStyle = {}, classCustom = "", size = "md", type = "rect", text = "Button", to = '', handleClick = () => { } }
) {
    const styleNew = {
        width: size == "sm" ? '20px' : size == "md" ? '30px' : size == "lg" ? '40px' : 'max-content',
        height: type == "rect" ? 'auto' : this.width,
        borderRadius: type == "rect" ? '20px' : '50%',
    }
    return (
        <div className={`${styles['button']} `} onClick={handleClick}>
            <Link style={{ ...styleNew, ...customStyle }} className={` ${styles['button-click']} ${classCustom}`} to={to}>
                {text}</Link> </div>
    )
}
export { Button };

import { Link } from "react-router-dom";

import { useNavLeft } from "../../../Providers/Context/NavLeftContext";
import { useLoading } from "../../../Providers/Context/LoadingContext";
import { useLogIn } from "../../../Providers/Context/LoginContext";
import styles from "./card.module.css";
function Card({ card = [], end = true, customClass }) {
    const { setLoading } = useLoading();
    const { setLogin } = useLogIn();
    const { indexSelect, setIndexSelect } = useNavLeft();
    return (
        <div className={`${styles['card-contain']} ${customClass}`}>

            {card.length > 0 ? card.map((child, indexCard) =>
                <div key={indexCard} >
                    <Link className={`${styles[indexSelect == child.src ? "selected" : ""]}`} to={child.src}
                        onClick={() => { setIndexSelect(child.src); setLoading(true); child.src == "/login" ? setLogin(false) : null }}>
                        <img className={`${styles['icon']} ${styles[child.name]}`} src={child.bg} alt="icon-nav" />
                        {child.element}</Link>
                </div>
            ) : null}
            {end ? <hr /> : null}
        </div>
    )
}
export { Card };
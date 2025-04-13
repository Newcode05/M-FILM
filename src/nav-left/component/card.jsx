import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../../App";
import { NavLeftContext } from "../layout/navleft";
import styles from "./card.module.css";
function Card({ card = [], end = true, customClass }) {
    const { setLoading } = useContext(LoadingContext);
    const { indexSelect, setIndexSelect } = useContext(NavLeftContext);
    return (
        <div className={`${styles['card-contain']} ${customClass}`}>

            {card.length > 0 ? card.map((child, indexCard) =>
                <div key={indexCard} >
                    <Link className={`${styles[indexSelect == child.src ? "selected" : ""]}`} to={child.src} onClick={() => { setIndexSelect(child.src); setLoading(true) }}>
                        <img className={`${styles['icon']} ${styles[child.name]}`} src={child.bg} alt="icon-nav" />
                        {child.element}</Link>
                </div>
            ) : null}
            {end ? <hr /> : null}
        </div>
    )
}
export { Card };
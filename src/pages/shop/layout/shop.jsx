import { useContext } from "react";
import { TrailerShop } from "../component/trailer/trailershop";
import { Theater } from "../component/theater/theater";
import { TicketCard } from "../component/ticket/ticket";
import { FoodLayout } from "../component/listfood/foodlayout";
import { LoadingContext } from "../../../App";
import styles from "./shop.module.css";

function Shop() {
    const { loading } = useContext(LoadingContext);
    return (
        !loading ?
            <div className={styles['shop-layout']}>
                <div className={styles['column-left']}>
                    <TrailerShop />
                    <FoodLayout />
                </div>
                <div className={styles['column-right']}>
                    <Theater />
                    <TicketCard />
                </div>
            </div> : null
    )
}
export { Shop };
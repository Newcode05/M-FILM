
import { TrailerShop } from "../component/trailer/trailershop";
import { Theater } from "../component/theater/theater";
import { TicketCard } from "../component/ticket/ticket";
import { FoodLayout } from "../component/listfood/foodlayout";

import { useLoading } from "../../../Providers/Context/LoadingContext";
import styles from "./shop.module.css";

export const Shop = () => {
    const { loading } = useLoading();
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

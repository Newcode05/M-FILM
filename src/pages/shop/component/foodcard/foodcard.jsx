import { Button } from "../../../home/component/trailer/component/button/button"
import styles from "./foodcard.module.css"
function FoodCard() {
    return (
        <div className={styles['food-card']}>
            <div className={styles['food-drink']}>
                <img className={styles['food']} src="/Food/popcorn.png" alt="" />
                <img className={styles['drink']} src="/Food/drink-coca.png" alt="" />
            </div>
            <div className={styles['infor']}>
                <h3 className={styles['infor-title']}>Popcorn & Coca</h3>
                <div className={styles['more-infor']}>medium</div>
                <div className={styles['price-contain']}>
                    <div className={styles['price-value']}>$10</div>
                    <Button
                        classCustom={styles['button-order']}
                        text="Order" size="none" />
                </div>
            </div>
        </div>
    )
}
export { FoodCard }
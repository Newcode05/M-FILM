import { FoodCard } from "../foodcard/foodcard"
import styles from "./foodlayout.module.css"
function FoodLayout() {
    const listfood = [
        { "img": "", 'name': "", "infor": "", "price": "" },
        { "img": "", 'name': "", "infor": "", "price": "" },
        { "img": "", 'name': "", "infor": "", "price": "" },

    ]
    return (
        <div className={styles['food-layout']}>
            {listfood.map((food, index) =>
                <FoodCard key={index} />
            )}
        </div>
    )
}
export { FoodLayout }
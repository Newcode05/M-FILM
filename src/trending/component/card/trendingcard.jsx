import { TrendingInfor } from "../infor/trendinginfor";
import styles from "./trendingcard.module.css";
function TrendingCard({ card }) {
    return (
        <div className={styles['trending-card']}>
            <img className={styles['poster']} src={card.poster} alt="" />
            <img className={styles['medal']} src="/public/Trending/medal-regular-36.png" alt="" />
            <TrendingInfor infor={card.infor} />
        </div>
    )
}
export { TrendingCard };
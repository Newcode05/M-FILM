import { TrendingInfor } from "../infor/trendinginfor";
import styles from "./trendingcard.module.css";
function TrendingCard({ card }) {
    return (
        <div className={styles['trending-card']}>
            <img className={styles['poster']} src={card.poster} alt="poster" />
            {card.top <= 3 ?
                <img className={styles['medal']}
                    src={card.top == 1 ? "/Trending/top-1.png" : card.top == 2 ? "/Trending/top-2.png" : card.top == 3 ? "/Trending/top-3.png" : null}
                    alt="" /> : <div className={styles['top']}>Top {card.top}</div>}
            <TrendingInfor infor={card.infor} />
        </div>
    )
}
export { TrendingCard };
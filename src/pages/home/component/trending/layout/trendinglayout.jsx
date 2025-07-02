import { TrendingCard } from "../component/card/trendingcard";
import styles from "./trendinglayout.module.css";
function TrendingLayout() {
    const listCard = [
        { 'poster': '/Img-Poster/poster-7.jpg','top':1, infor: { 'name': 'Dora', 'star': '10', 'view': '1.4M', 'time': '' } },
        { 'poster': '/Img-Poster/poster-6.jpg','top':2, infor: { 'name': 'Dinosaur', 'star': '9.8', 'view': '2.5M', 'time': '' } },
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg','top':3, infor: { 'name': 'Dinosaur', 'star': '8.9', 'view': '4.8M', 'time': '' } },
        { 'poster': '/Img-Poster/poster-8.jpg','top':4, infor: { 'name': 'Avatar', 'star': '9.0', 'view': '1.2M', 'time': '' } },
        { 'poster': '/Img-Poster/poster-8.jpg','top':5, infor: { 'name': 'Avatar', 'star': '9.4', 'view': '1M', 'time': '' } },
        { 'poster': '/Img-Poster/poster-8.jpg','top':6, infor: { 'name': 'Avatar', 'star': '9.0', 'view': '1.2M', 'time': '' } },

    ]
    return (
        <div className={styles['trending-layout']}>
            <h2 className={styles['trending-title']}>Top Trending</h2>
            <div className={styles['trending-list']}>
                {listCard.map((card, index) =>
                    <TrendingCard key={index} card={card} />
                )}
            </div>
        </div>
    )
}
export { TrendingLayout };
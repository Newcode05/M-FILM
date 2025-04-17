import { useState } from "react";
import { Switch } from "../switch/switch"
import { ButtonBack } from "../back/back";
import styles from "./poster.module.css"
const Poster = ({ }) => {
    const [indexActive, setIndexActive] = useState(0);
    const listPoster = [
        { poster: '/Login/khi cuoc doi cho ban qua quyt.jpg', alt: 'poster' },
        { poster: '/Login/lu kinh 1.png', alt: 'poster' },
        { poster: '/public/Login/34/review-kho-do-danh-nhung-tap-dau-2.jpg', alt: 'poster' },

    ]
    return (
        <div className={styles['poster-contain']}>
            <ButtonBack />
            {listPoster.map((card, index) =>
                <img key={index}
                    src={card.poster}
                    alt={card.alt}
                    className={`${styles['img-slide']} ${indexActive == index ? styles['img-active'] : ''}`}
                />
            )}
            <Switch indexActive={indexActive} setIndexActive={setIndexActive} />
        </div>
    )
}
export { Poster }
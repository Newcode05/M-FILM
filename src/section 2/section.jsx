

import { CardFilm } from "../component/card/cardfilm";
import styles from "./section.module.css"
function Section() {
    const List = [
        { poster: '/public/Img-Poster/Kho do danh 1.jpg', name: 'Khó dỗ dành' },
        { poster: '/public/Img-Poster/bậc thầy đàm phán.jpg', name: 'Bậc thầy đàm phán' },
        { poster: '/public/Img-Poster/khi cuoc doi cho ban qua quyt 1.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '/public/Img-Poster/khi cuoc doi cho ban qua quyt.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '', name: 'Bậc thầy đàm phán' },
        { poster: '', name: 'Bậc thầy đàm phán' },

    ]
    return (
        <section className={styles['section']}>
            <h2 className={styles['title']}>Dramatic</h2>
            <div className={styles['list']}>
                {List.map((card, index) =>
                    <CardFilm key={index} card={card} />
                )}
            </div>
        </section>
    )
}
export { Section }
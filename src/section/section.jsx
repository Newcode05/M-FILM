
import { CardFilm } from "../component/card/cardfilm";
import { Scroll } from "../component/scroll/scroll";
import styles from "./section.module.css"
function Section() {
    const List = [
        { poster: '/public/Img-Poster/Kho do danh 1.jpg', name: 'Khó dỗ dành' },
        { poster: '/public/Img-Poster/bậc thầy đàm phán.jpg', name: 'Bậc thầy đàm phán' },
        { poster: '/public/Img-Poster/khi cuoc doi cho ban qua quyt 1.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '/public/Img-Poster/khi cuoc doi cho ban qua quyt.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '/public/Img-Poster/Kho do danh 2.jpg', name: 'Bậc thầy đàm phán' },
        { poster: '/public/Img-Poster/Kho do danh 3.jpg', name: 'Bậc thầy đàm phán' },

    ]
    return (
        <section className={styles['section']}>
            <h2 className={styles['title']}>Dramatic</h2>
            <Scroll customClass={styles['list']}>
                {List.map((card, index) =>
                    <CardFilm key={index} card={card} />
                )}
            </Scroll>
        </section>
    )
}
export { Section }
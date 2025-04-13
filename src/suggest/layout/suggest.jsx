
import { SuggestCard } from "../component/card/suggestcard";
import styles from "./suggest.module.css";

function SuggestLayout() {
    const listSuggest = [
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg', 'name': '', },
        { 'poster': '/Img-Poster/poster-7.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-8.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-6.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-natra-2.jpg', 'name': '', },
    ]
    return (
        <section className={styles['suggest-layout']}>
            <h2 className={styles['title']}>You might like</h2>
            <div className={styles['list']}>
                {listSuggest.map((card, index) =>
                    <SuggestCard key={index} card={card} />
                )}
            </div>
        </section>
    )
}
export { SuggestLayout };
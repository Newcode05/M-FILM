import { useState, useRef } from "react";
import { SuggestCard } from "../component/card/suggestcard";
import styles from "./suggest.module.css";

function SuggestLayout() {
    const [isDown, setIsDown] = useState(false);
    const [start, setStart] = useState(0);
    const [scroll, setScroll] = useState(0);
    const containerRef = useRef(null);
    const listSuggest = [
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg', 'name': '', },
        { 'poster': '/Img-Poster/poster-7.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-8.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-6.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-natra-2.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg', 'name': '', },
        { 'poster': '/Img-Poster/poster-7.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg', 'name': '', },
        { 'poster': '/Img-Poster/poster-7.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-8.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-6.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-natra-2.jpg', 'name': '', },
        { 'poster': '/Img-Poster/poster-disney-the-good-dinosaur.jpeg', 'name': '', },
    ]
    const handleDown = (e) => {
        setIsDown(true);
        if (containerRef.current) {
            setStart(e.pageX - containerRef.current.offsetLeft);
            setScroll(containerRef.current.scrollLeft);
        }
    }
    const handleUp = () => {
        setIsDown(false);
    }
    const handleLeave = () => {
        setIsDown(false);
    }
    const handleMove = (e) => {
        if (!isDown) return;
        else {
            const x = e.pageX - containerRef.current.offsetLeft;
            const scrollX = (x - start) * 1.5;
            containerRef.current.scrollLeft = scrollLeft - scrollX;
        }
    }
    return (
        <section className={styles['suggest-layout']}>
            <h2 className={styles['title']}>You might like</h2>
            <div ref={containerRef} className={styles['list']}
                onMouseDown={(e) => handleDown(e)}
                onMouseUp={handleUp}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => handleMove(e)}
            >
                {listSuggest.map((card, index) =>
                    <SuggestCard key={index} card={card} />
                )}
            </div>
        </section>
    )
}
export { SuggestLayout };
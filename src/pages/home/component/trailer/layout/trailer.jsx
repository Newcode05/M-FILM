import { useEffect, useState, useRef } from "react";
import { Trailer } from "../component/trailer/trailer"
import { Switch } from "../../../../../component/switch/switch";
import styles from "./trailer.module.css";
function TrailerLayout() {
    const [indexFilm, setIndexFilm] = useState(0);
    const [direction, setDirection] = useState('right');
    const time = useRef(null);
    const PreDis = useRef(null);
    const ListTrailer = [
        { poster: '/Img-Poster/mavkar-3.jpg', src: '', dis: {} },
        { poster: '/Img-Poster/khi cuoc doi cho ban qua quyt 1.webp', src: '', dis: {} },
        { poster: '/Img-Poster/Kho do danh 3.jpg', src: '', dis: {} },
        { poster: '/Img-Poster/2025-The.Art_.Of_.Negotiation.webp', src: '', dis: {} },
    ];
    useEffect(() => {
        if (time.current) clearTimeout(time.current);
        time.current = setTimeout(() => {
            setIndexFilm(prev => {
                PreDis.current = prev;
                if (prev == 3) { setDirection('left'); return 0; }
                else { setDirection('right'); return prev + 1; }
            })
        }, 5000);
        return () => clearInterval(time);
    }, [indexFilm]);
    return (
        <section className={styles['trailer-layout']}>

            <Trailer film={ListTrailer[indexFilm]} />
            <Switch
                customStyle={{
                    position: 'absolute',
                    bottom: "10px",
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
                index={indexFilm}
                setIndex={setIndexFilm}
                direction={direction}
                setDirection={setDirection}
                PreDis={PreDis}
            />
        </section>
    )
}
export { TrailerLayout };
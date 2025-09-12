
import styles from "./cardfilm.module.css";
function CardFilm({ customStyle, customClass, dir = "hor", card }) {
    const styleCard = {
        flexBasis: dir == "hor" ? '300px' : 'auto',
        width: dir == "hor" ? '300px' : 'auto',
        height: 'auto',
    }
    return (
        <div style={{ ...styleCard, ...customStyle }} className={styles['card-film']}>
            <div style={{ aspectRatio: dir == "hor" ? '16/9' : '3/4' }} className={styles['card-contain']}>
                <img className={styles['poster']} src={card.poster} alt="poster" draggable="false" />
                <div className={styles['play']}></div>
            </div>
            <h3 className={styles['name']}>{card.name}</h3>
        </div>
    )
}
export { CardFilm }
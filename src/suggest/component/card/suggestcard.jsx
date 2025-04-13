
import styles from "./suggestcard.module.css"
function SuggestCard({ card }) {
    return (
        <div className={styles['suggest-card']}>
            <img className={styles['poster']} src={card.poster} alt={card.name} />
            <div className={styles['button-details']}>Details</div>
        </div>
    )
}
export { SuggestCard }
import { Link } from "react-router-dom"
import styles from "./title.module.css"
function Title({ document }) {
    return (
        <div className={styles['document-contain']}>
            <h3 className={styles['document-title']}>{document.title}</h3>
            {document.list.map((card, index) =>
                <div key={index}>
                    <a href={card.src}>{card.name}</a>
                </div>
            )}
        </div>
    )
}
export { Title }
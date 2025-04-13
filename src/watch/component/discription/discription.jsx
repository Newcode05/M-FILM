

import styles from "./discription.module.css"
function DiscriptionMovie() {
    return (
        <div className={styles['discription-movie']}>
            <div className={styles['movie-name']}>Mavkar Movie</div>
            <div className={styles['movie-infor']}>
                <div className={styles['session']}>Seasson 1 </div>
                <div className={styles['episode']}></div>
            </div>
            <div className={styles['actor-list']}>
                {[...Array(5)].map((actor, index) =>
                    <Actor key={index} />
                )}
            </div>
            <div className={styles['discription']}>The main theme of the film is a love story between an enchanted forest dweller (Mavka) and a human (Lukas), and their battle with the villain Kylina, who desires to own a magical forest wellspring. Mavka: The Forest Song was released in Ukraine on March 2, 2023.
                The main theme of the film is a love story between an enchanted forest dweller (Mavka) and a human (Lukas), and their battle with the villain Kylina, who desires to own a magical forest wellspring. Mavka: The Forest Song was released in Ukraine on March 2, 2023.
            </div>
        </div>
    )
}
function Actor() {
    return (
        <div className={styles['actor']}>

        </div>
    )
}
export { DiscriptionMovie }
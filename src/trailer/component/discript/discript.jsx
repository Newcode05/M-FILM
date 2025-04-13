
import { Button } from "../button/button";
import styles from "./discript.module.css";

function Discription() {
    return (
        <div className={styles['discript-contain']}>
            <div className={styles['hot-dis']}>
                <span className={styles['dis-1']}>Drama</span>
                <span className={styles['dis-2']}>Fantsy</span>
            </div>
            <h2 className={styles['name']}>M A V K A R</h2>
            <div className={styles['disc']}>The already fumultuous and difficult lives of ordinary
                people in the Ukrainian countryside are turned upside down by war, revolution, and change of goverment
            </div>
            <Button
                customStyle={{
                    padding: '12px 20px',
                    paddingLeft: '35px',
                    borderRadius: '50px',
                    backgroundColor: 'white',
                    backgroundImage: 'url("/public/Poster/play-regular-36.png")',
                    backgroundSize: '24px',
                    backgroundPosition: 'left 10px center',
                    backgroundRepeat: 'no-repeat',
                    color: 'black',
                    fontSize: '1.5rem'
                }}
                size="none" to="/watch" text="Watch film" />
        </div >
    )
}
export { Discription };
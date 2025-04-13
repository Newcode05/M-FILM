
import { Button } from "../button/button";
import { Discription } from "../discript/discript";
import styles from "./trailer.module.css";
function Trailer() {
    return (
        <div className={styles['trailer-contain']}>
            <video className={styles['trailer']} src=""></video>
            <img className={styles['poster']} src="/Img-Poster/mavkar-3.jpg" alt="poster" />
            <Button
                customStyle={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    padding: "10px 20px",
                    paddingLeft: "35px",
                    fontSize: "1.3rem",
                    color: "white",
                    backgroundImage: 'url("/Poster/hot-solid-36.png")',
                    backgroundSize: "24px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 10px center",
                    WebkitbBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                    zIndex: "50"
                }} text="Now Popular" to="" size="none" />
            <Discription />
        </div>
    )
}
export { Trailer };
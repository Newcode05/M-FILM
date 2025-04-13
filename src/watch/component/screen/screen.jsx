import { useContext } from "react"
import { ScreenContext } from "../watching/watching"
import styles from "./screen.module.css"
function Screen() {
    const { screen, setScreen } = useContext(ScreenContext);
    return (
        <div
            style={{ backgroundImage: `url(${screen ? '/public/Control/exit-fullscreen-regular-48.png' : '/public/Control/fullscreen-regular-48.png'})` }}
            className={styles["button-screen"]} onClick={() => setScreen(prev => !prev)} >

        </div >
    )
}
export { Screen }
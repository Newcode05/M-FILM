import { useEffect, useRef } from "react";
import { Couch } from "../couch/couch"
import styles from "./theater.module.css"
function Theater() {
    const matRef = useRef(null);
    const arr = [
        1.2, 0, 0, -1.2,
        1.2, 0, 0, -1.2,
        0, 0
    ];
    useEffect(() => {
        if (matRef.current) {
            matRef.current.width = 400;
            matRef.current.height = 70;
            const ctx = matRef.current.getContext("2d");
            ctx.lineWidth = 8;
            ctx.strokeStyle = "rgba(181,217,36,1)";
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.quadraticCurveTo(200, 0, 350, 50);
            ctx.stroke();
        }
    })
    return (
            <div className={styles['theater-contain']}>
                <h3 className={styles['theater-infor']}>
                    <div className={styles['name-infor']}>
                        <h2 className={styles['name']}>Mavka: Forest Song</h2>
                        <div className={styles['more-infor']}>14 sessions</div>
                    </div>
                    <div className={styles['time-infor']}>
                        <h2 className={styles['time']}>10:30</h2>
                        <div className={styles['date']}>21 Mar</div>
                    </div>
                </h3>
                <div className={styles['theater-couch']}>
                    <div className={styles['couch-title']}>Lux Hall</div>
                    <canvas width="400px" height="70px" ref={matRef} className={styles['theater-mat']}></canvas>
                    <div className={styles["couch-contain"]}>
                        {arr.map((couch, indexCouch) => {
                            return <Couch customStyle={{ gridColumn: indexCouch == 8 ? '2/3' : indexCouch == 9 ? '3/4' : '' }} index={couch} key={indexCouch} />
                        })}
                    </div>
                </div>
                <div className={styles['theater-circle']}></div>
            </div>
    )
}
export { Theater }
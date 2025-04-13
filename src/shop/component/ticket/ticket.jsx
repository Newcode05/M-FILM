
import { Button } from "../../../trailer/component/button/button";
import styles from "./ticket.module.css"
function TicketCard() {
    return (
        <div className={styles['ticket-card']}>
            <div className={styles['ticket-infor']}>
                <div className={styles["circle-1"]}></div>
                <div className={styles["circle-2"]}></div>
                <div className={styles['track-contain']}>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                    <div className={styles['track']}></div>
                </div>
                <h2 className={styles['name']}>Marvka: Forest Song</h2>
                <div className={styles['date-time']}>
                    <div className={styles['date']}>
                        <div className={styles['date-name']}>When:</div>
                        <div className={styles['date-value']}>21th March</div>
                    </div>
                    <div className={styles['time']}>
                        <div className={styles['time-name']}>At:</div>
                        <div className={styles['time-value']}>10:30</div>
                    </div>
                </div>
                <div className={styles['hall-seats']}>
                    <div className={styles['hall']}>
                        <div className={styles["hall-name"]}>Hall :</div>............................................................
                        <div className={styles['hall-value']}>Lux</div>
                    </div>
                    <div className={styles['seats']}>
                        <div className={styles["seats-name"]}>Seats :</div>............................................................
                        <div className={styles["seats-value"]}>B7,B8</div>
                    </div>
                </div>
                <div className={styles['cash']}>
                    <div className={styles['price']}>$26</div>
                    <Button
                        classCustom={styles['button-buy']}
                        size="none" text="Buy ticket" />
                </div>
            </div>
            <div className={styles['ticket-poster']}>
                <img className={styles['poster']} src="/Shop/Ticket/mavkar-poster-1.JPG" alt="poster" />
            </div>
        </div>
    )
}
export { TicketCard };
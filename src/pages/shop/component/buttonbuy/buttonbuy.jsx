import styles from "./buttonbuy.module.css"
function ButtonBuy() {
    return (
        <div className={styles['button-buy']}>Buy Ticket
            <span className={styles['shop-icon']}></span>
            <div className={styles['shirt-icon']}></div>
        </div>
    )
}
export { ButtonBuy };
import styles from "./logosvg.module.css"
export const LogoSvg = ({ customStyle = {}, customClass = "" }) => {

    return (
        <div className={`${styles['logo-container']}`}>
            <svg 
                className={`${styles['logo-svg']} ${customClass}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    className={styles['path']}
                    d="
                m12 22.019-3.717-2.146
                V9.863
                l2.479-1.43
                v10.01
                l1.238.753 1.238-.753
                V8.434
                l2.479 1.43
                v10.01
                L12 22.019
                z
                m8.666-15.014
                v10.009
                l-2.475 1.43
                V8.434
                L12 4.861 5.807 8.434
                v10.01
                l-2.473-1.43
                V7.005
                L12 2
                l8.666 5.005z"></path>
            </svg >
        </div>
    )
}
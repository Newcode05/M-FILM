
import { InderLoading } from "../../../../component/inderteminate loading/inder"
import { Input } from "../../../login/component/input/input"
import { Next } from "../next/next"
import { useEmailStep } from "./hooks/useEmailStep"
import styles from "./emailstep.module.css"

const EmailStep = () => {
    const { warn, loading, onSub, handleChange } = useEmailStep();
    return (
        <form className={styles['email-step']} onSubmit={(e) => onSub(e)}>
            <InderLoading loading={loading} />
            <h2 className={styles['title']}>Forget Password</h2>
            <Input type="email" name="email" placeholder="Enter your email" warn={warn} handleChange={handleChange} />
            <Next customClass={styles['button-next']} />
        </form>
    )
}
export { EmailStep }
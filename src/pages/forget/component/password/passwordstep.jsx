
import { useParams } from "react-router-dom";

import { Input } from "../../../login/component/input/input";
import { InderLoading } from "../../../../component/inderteminate loading/inder";
import { Next } from "../next/next";
import { AccEmail } from "../account/acc_email";


import { usePasswordStep } from "./hooks/usePasswordStep";


import styles from "./passwordstep.module.css";

export const PasswordStep = () => {
    const { warnPass, warnResPassword, loading, handleChangePass, handleChangeResPass, onSub } = usePasswordStep();
    const { token, email } = useParams();
    console.log(email);
    /*useEffect(() => {
        intance.post('/forgot-pasword/step')
            .then(res => {
                if (res.status['step'] === 'otp') {
                    setStep(true);
                }
                else {
                    setStep(false);
                }
            }).catch(err => {
                console.log(err.message);
            })
    });*/
    return (
        <form className={styles['password-step']} onSubmit={(e) => onSub(e, token)}>
            <AccEmail email={atob(email)} />
            <InderLoading loading={loading} />
            <h3 className={styles['title']}>Enter New Password</h3>
            <Input
                type="password"
                name="password"
                placeholder="Enter new password"
                warn={warnPass}
                handleChange={handleChangePass}
            />
            <Input
                type="password"
                name="re-password"
                placeholder="Enter new password again"
                warn={warnResPassword}
                handleChange={handleChangeResPass}
            />
            <Next customClass={styles['button-next']} />
        </form>
    )
}
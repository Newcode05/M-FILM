import { useParams } from "react-router-dom";

import { Input } from "../../../login/component/input/input";
import { InderLoading } from "../../../../component/inderteminate loading/inder";
import { Next } from "../next/next";
import { AccEmail } from "../account/acc_email";
import { usePasswordStep } from "./hooks/usePasswordStep";

import styles from "./passwordstep.module.css";

export const PasswordStep = () => {
    const { warnPass, warnResPassword, loading,
        handleChangePass, handleChangeResPass, onSub } = usePasswordStep();
    const { token, email } = useParams();
    return (
        <form className={styles['password-step']} onSubmit={(e) => onSub(e, token)}>
            <AccEmail email={atob(email)} />
            <InderLoading loading={loading} />
            <h3 className={styles['title']}>Enter New Password</h3>
            <Input
                customClass={styles['email']}
                customStyle={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                }}
                type="text"
                name="email"
                placeholder="example@gmail.com"
                valueInitial={atob(email)}
                autoComplete="email"
                hidden={true}
                readOnly={true}
            />
            <Input
                type="password"
                name="password"
                placeholder="Enter new password"
                autoComplete="new-password"
                warn={warnPass}
                handleChange={handleChangePass}
            />
            <Input
                type="password"
                name="re-password"
                placeholder="Enter new password again"
                autoComplete="new-password"
                warn={warnResPassword}
                handleChange={handleChangeResPass}
            />
            <Next customClass={styles['button-next']} />
        </form>
    )
}
import { Forget } from "../../src/pages/forget/forget"
import { EmailStep } from "../../src/pages/forget/component/email/emailstep"
import { OtpStep } from "../../src/pages/forget/component/otp/otpstep"
import { PasswordStep } from "../../src/pages/forget/component/password/passwordstep"

export const ForgotPasswordRoute = {
    path: "/forgotpassword",
    element: <Forget />,
    children: [
        {
            index: true,
            element: <EmailStep />
        },
        {
            path: "otp/:email",
            element: <OtpStep />
        },
        {
            path: "password/:email/:token",
            element: <PasswordStep />
        }
    ]
}
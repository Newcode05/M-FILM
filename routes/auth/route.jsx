import { AuthLayout } from "./layout";
import { Form } from "../../src/pages/login/layout/form";
import { LogIn } from "../../src/pages/login/component/log/log";
import { Register } from "../../src/pages/register/register";

export const AuthRoute = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            path: "login",
            element:
                <Form>
                    <LogIn />
                </Form>
        },
        {
            path: "register",
            element:
                <Form>
                    <Register />
                </Form>
        }
    ]
}
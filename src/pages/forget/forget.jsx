import { Outlet } from "react-router-dom"
import { Form } from "../login/layout/form.jsx"

export const Forget = () => {
    return (
        <Form>
            <Outlet />
        </Form>
    )
}

import { Layout } from "../home/layout";
import { Upload } from "../../src/pages/admin/upload/upload"
import { Update } from "../../src/pages/admin/update/update"
import { PrivateRoute } from "../PrivateRoute";

export const AdminRoute = {
    path: "/admin",
    element: <Layout />,
    children: [
        {
            path: "upload",
            element:
                <PrivateRoute roleCheck="admin" navigateTo="/login">
                    <Upload />
                </PrivateRoute>
        },
        {
            path: "update",
            element:
                <PrivateRoute roleCheck="admin" navigateTo="/login">
                    <Update />
                </PrivateRoute>
        }
    ]
};
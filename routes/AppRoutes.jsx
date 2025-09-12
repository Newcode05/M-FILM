
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeRoute } from "./home/route";
import { AuthRoute } from "./auth/route";
import { WatchingRoute } from "./home/route";
import { AdminRoute } from "./admin/route";
import { ForgotPasswordRoute } from "./forgotpassword/route";


export const AppRoute = () => {

    const router = createBrowserRouter([

        { ...HomeRoute },
        { ...WatchingRoute },
        { ...AdminRoute },
        { ...AuthRoute },
        { ...ForgotPasswordRoute }

    ]);
    return <RouterProvider router={router} />
}
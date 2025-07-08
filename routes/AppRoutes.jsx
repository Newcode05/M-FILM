
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
    {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="watch/:videoID" element={<WatchingLayout />} />
                    <Route path="search/" element={<Result />} />
                    <Route path="/admin/upload" element={<Upload />} />
                    <Route path="/admin/update" element={<Update />} />
                </Route>

                <Route path="/login" element={<LoginLayout />}>
                    <Route index element={<Form><LogIn /></Form>} />
                </Route>
                <Route path="/register" element={<Form ><Register /></Form>} />

                <Route path="/forgotpassword" element={<Forget />} >
                    <Route index element={<EmailStep />} />
                    <Route path="otp/:token/:email" element={<OtpStep />} />
                    <Route path="password/:token/:email" element={<PasswordStep />} />
                </Route>
                <Route path="/admin" element={<PrivateRoute><Update /></PrivateRoute>} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </BrowserRouter>*/}
    ``
}
import { Layout } from "./layout";

import { Home } from "../../src/pages/home/layout/home";
import { Shop } from "../../src/pages/shop/layout/shop";
import { Result } from "../../src/layout/search_result/component/list_result/listresult";
import { WatchingLayout } from "../../src/pages/watch/layout/watchinglayout";
import { Setting } from "../../src/pages/setting/setting";


export const HomeRoute = {
    path: "/",
    element: <Layout />,
    children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "search", element: < Result /> },
        { path: "setting", element: <Setting /> }
    ]


}
export const WatchingRoute = {
    path: "/watch/:videoID",
    element: <Layout />,
    children: [
        { index: true, element: <WatchingLayout /> }
    ]
}
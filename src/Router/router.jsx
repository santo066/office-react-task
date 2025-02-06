import Layout from "@/Layout/Layout";
import Home from "@/Page/Home/Home";
import HomeNew from "@/Page/HomeNew/HomeNew";
import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>
            // }
            {
                path:"/",
                element:<HomeNew></HomeNew>
            }
        ]
    },
]);

export default router;
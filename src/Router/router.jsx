import Layout from "@/Layout/Layout";
import Home from "@/Page/Home/Home";
import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;
import Header from "@/Share/Header/Header";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    )
}
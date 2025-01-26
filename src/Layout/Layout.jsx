import Footer from "@/Share/Footer/Footer";
import Header from "@/Share/Header/Header";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
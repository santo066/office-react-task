import Footer from "@/Share/Footer/Footer";
import FooterNew from "@/Share/FooterNew/FooterNew";
import Header from "@/Share/Header/Header";
import HeaderNew from "@/Share/HeaderNew/HeaderNew";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="#f7f6f2">
            <HeaderNew></HeaderNew>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <FooterNew></FooterNew>
        </div>
    )
}
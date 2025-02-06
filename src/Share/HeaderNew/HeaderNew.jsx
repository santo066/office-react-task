import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../../Homenew.css"

export default function HeaderNew() {
    return (
        <div className="bg-[#f7f6f2]">
            <div className="max-w-[1640px] mx-auto ">
                <div className="navbar  mr-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="xl:mx-5 md:mx-1 text-[18px] font-medium"><Link to={'/'}>Fanvue AI</Link></li>
                            <li className="xl:mx-5 md:mx-1 text-[18px] font-medium"><Link to={'/'}>Our Mission</Link></li>
                            <li className="xl:mx-5 md:mx-1 text-[18px] font-medium"><Link to={'/'}>Support</Link></li>
                            <li className="xl:mx-5 md:mx-1 text-[18px] font-medium"><Link to={'/'}>Login</Link></li>
                        </ul>
                    </div>
                    <Button variant={'homeNewButton'}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}
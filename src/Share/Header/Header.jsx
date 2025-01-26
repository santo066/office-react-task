import '../../app.css';
import logo from "../../assets/Hero Subtitle.png"


export default function Header() {
    return (
        <div className="navbar bg-[transparent]  max-w-[1280px] left-[50%] flex justify-between  mt-[54px] absolute">
            <div className="navbar-start max-w-[20%]">
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
                <a href='#' className="text-xl text-white">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className=" max-w-[80%] hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='bg-[#13542643] mr-5 text-white px-5 py-[5px] rounded-[30px] hover:bg-[#318E4D] text-[20px] duration-300'>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-[#13542643]">
                                <li className='hover:bg-[#318E4D]'><a>Submenu 1</a></li>
                                <li className='hover:bg-[#318E4D]'><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className='bg-[#13542643] mr-5 text-white px-5 py-[5px] rounded-[30px] hover:bg-[#318E4D] text-[20px] duration-300'><a>About Us</a></li>
                    <li className='bg-[#13542643] mr-5 text-white px-5 py-[5px] rounded-[30px] hover:bg-[#318E4D] text-[20px] duration-300'><a>Services</a></li>
                    <li className='bg-[#13542643] mr-5 text-white px-5 py-[5px] rounded-[30px] hover:bg-[#318E4D] text-[20px] duration-300'><a>Metavers</a></li>
                    <li className='bg-[#13542643] text-white px-5 py-[5px] rounded-[30px] hover:bg-[#318E4D] text-[20px] duration-300'><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
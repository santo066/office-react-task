import Header from "@/Share/Header/Header";
import '../../../app.css';
import { IoArrowBackSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import sercle from '../../../assets/Group 6.png';
import line from '../../../assets/Vector 174.png';
import { RiGlobalLine } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";


export default function Hero() {
    return (
        <div className="bg-slate-600 relative hero-section h-[auto]">
            <div className="top-left-shape absolute"></div>
            <Header></Header>
            <div className="max-w-[1280px] mx-auto flex justify-between pt-[150px] res-hero-main-wrapper">
                <div className="hero-content static z-[999] top-[220px] flex flex-col items-start gap-0">
                    <div className="ml-24 margine-l-0">
                        <h1 className="text-[96px]/[150%] tracking-[2px] text-white font-light tab-font-size">Explore</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-colum">
                        <div>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse bg-[#0A2713] p-[10px] rounded-[32px]">
                                <div className="avatar border-[#061F0D]">
                                    <div className="w-12 bg-[#C4C4C4]">
                                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                    </div>
                                </div>
                                <div className="avatar border-[#061F0D]">
                                    <div className="w-12 bg-[#C4C4C4]">
                                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                    </div>
                                </div>
                                <div className="avatar border-[#061F0D]">
                                    <div className="w-12 bg-[#C4C4C4]">
                                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                    </div>
                                </div>
                                <div className="avatar border-[#061F0D]">
                                    <div className="w-12 bg-[#C4C4C4]">
                                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                    </div>
                                </div>
                                <div className="avatar placeholder border-[#135426] ">
                                    <div className="bg-[#13542643] text-neutral-content w-12">
                                        <IoArrowBackSharp className="text-white text-2xl rotate-[145deg]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[96px]/[150%] tracking-[2px] text-white font-light tab-font-size">Infinite</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[96px]/[150%] tracking-[2px] text-white font-light tab-font-size">Metaverse</h1>
                    </div>
                    <Button variant={"primary"} className='mt-[30px]'>Get Started</Button>
                    <div className="counter-wrapper flex gap-[30px] items-center justify-between absolute bottom-[170px]">
                        <div>
                            <h3 className="text-[36px] font-medium text-white">230M<span className="text-[#318E4D]">+</span></h3>
                            <p className="text-[16px] text-[#318E4D]">User</p>
                        </div>
                        <div>
                            <h3 className="text-[36px] font-medium text-white">12y<span className="text-[#318E4D]">+</span></h3>
                            <p className="text-[16px] text-[#318E4D]">Experience</p>
                        </div>
                        <div>
                            <h3 className="text-[36px] font-medium text-white">98M<span className="text-[#318E4D]">+</span></h3>
                            <p className="text-[16px] text-[#318E4D]">Asset</p>
                        </div>
                        <a href="#">
                            <IoArrowForwardOutline className="right-2 text-[20px] text-white" />
                        </a>
                    </div>
                </div>
                <div className="hero-image relative z-[999]">
                    <div className="hero-right-image relative w-[460px] h-[688px] bg-[#C4C4C4] rounded-br-[50px]">
                        <div className="image-btn-wrapper absolute top-[47%] left-[-89px] bg-[#13542643] max-w-[167px] px-[8px] py-3 border-[#318E4D] border-[1px] rounded-[20px]">
                            <div className="btn-texts relative">
                                <div className="flex items-center flex-col mt-3">
                                    <a href="#" className="text-[16px] text-white font-medium">Connect</a>
                                    <div className="w-[56px] h-[1px] bg-[#135426] my-[10px]"></div>
                                    <a href="#" className="text-[16px] text-white font-medium">Collaborate</a>
                                </div>
                                <div className="w-[110px] top-[-40px] absolute h-[65px] bg-[#C4C4C4] mx-auto under-image"></div>
                                <img className="absolute top-0 right-[-8px]" src={sercle} alt="" />
                                <img className="absolute top-[-15px] right-[-140px]" src={line} alt="" />
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <a href="#" className="text-[#318E4D] text-[16px] font-medium underline">View</a>
                                <RiGlobalLine className="text-white text-[16px]" />
                            </div>
                        </div>
                    </div>
                    <div className="image-under-wrapper flex gap-[20px] items-center absolute bottom-[50px] left-[50%]">
                        <div>
                            <div className="w-[43px] mb-[6px] flex items-center justify-center h-[43px] rounded-[50%] bg-[#13542643] border-[1px] border-[#135426]">
                                <div className="w-[33px] h-[33px] rounded-[50%] bg-[#318E4D] flex items-center justify-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.08 10.2904L2.67 2.60041C2.7635 2.14186 3.01485 1.73061 3.38028 1.43826C3.74572 1.14591 4.20211 0.990971 4.67 1.00041H10.37C10.8379 0.990971 11.2943 1.14591 11.6597 1.43826C12.0252 1.73061 12.2765 2.14186 12.37 2.60041L13.96 10.2904M4 11.0004H7M11 14.0004C11.7956 14.0004 12.5587 13.6843 13.1213 13.1217C13.6839 12.5591 14 11.7961 14 11.0004C14 10.2048 13.6839 9.4417 13.1213 8.87909C12.5587 8.31648 11.7956 8.00041 11 8.00041H4C3.20435 8.00041 2.44129 8.31648 1.87868 8.87909C1.31607 9.4417 1 10.2048 1 11.0004C1 11.7961 1.31607 12.5591 1.87868 13.1217C2.44129 13.6843 3.20435 14.0004 4 14.0004H11ZM11.5 11.0004C11.5 11.2765 11.2761 11.5004 11 11.5004C10.7239 11.5004 10.5 11.2765 10.5 11.0004C10.5 10.7243 10.7239 10.5004 11 10.5004C11.2761 10.5004 11.5 10.7243 11.5 11.0004Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-[43px] flex items-center justify-center h-[43px] rounded-[50%] bg-[#13542643] border-[1px] border-[#135426]">
                                <div className="w-[33px] h-[33px] rounded-[50%] bg-[#318E4D] flex items-center justify-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 13.9276V5.96757M7.5 5.96757L1.11 3.50757M7.5 5.96757L13.89 3.50757M13.89 3.46757C13.8367 3.39527 13.7638 3.33974 13.68 3.30757L7.68 1.03757C7.62323 1.01279 7.56195 1 7.5 1C7.43805 1 7.37677 1.01279 7.32 1.03757L1.32 3.34757C1.24073 3.36856 1.16833 3.40993 1.11 3.46757C1.04015 3.55207 1.00133 3.65794 1 3.76757V11.0876C1.0013 11.1874 1.03247 11.2846 1.08951 11.3666C1.14654 11.4486 1.22682 11.5116 1.32 11.5476L7.32 13.8576H7.68L13.68 11.5476C13.7732 11.5116 13.8535 11.4486 13.9105 11.3666C13.9675 11.2846 13.9987 11.1874 14 11.0876V3.80757C14.0085 3.6843 13.9691 3.56252 13.89 3.46757Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className="bg-[#13542643] w-[220px] h-[105px] rounded-[20px] border-[1px] border-[#318E4D]">
                            <div className="relative">
                                <p className="font-medium text-base text-white absolute z-[9999] top-7 left-10">Global <span className="block">Connectivity</span></p>
                                <svg className="absolute top-0 left-0" width="219" height="106" viewBox="0 0 219 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1_77" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M180 20C180 8.95431 171.046 0 160 0H20C8.95431 0 0 8.9543 0 20V86C0 97.0457 8.95431 106 20 106H199C210.046 106 219 97.0457 219 86V59.5C219 48.7304 210.27 40 199.5 40C188.73 40 180 31.2696 180 20.5V20Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M180 20C180 8.95431 171.046 0 160 0H20C8.95431 0 0 8.9543 0 20V86C0 97.0457 8.95431 106 20 106H199C210.046 106 219 97.0457 219 86V59.5C219 48.7304 210.27 40 199.5 40C188.73 40 180 31.2696 180 20.5V20Z" fill="url(#paint0_linear_1_77)" fill-opacity="0.8" />
                                    <path d="M20 1H160V-1H20V1ZM1 86V20H-1V86H1ZM199 105H20V107H199V105ZM218 59.5V86H220V59.5H218ZM181 20.5V20H179V20.5H181ZM199.5 39C189.283 39 181 30.7173 181 20.5H179C179 31.8218 188.178 41 199.5 41V39ZM220 59.5C220 48.1782 210.822 39 199.5 39V41C209.717 41 218 49.2827 218 59.5H220ZM199 107C210.598 107 220 97.598 220 86H218C218 96.4934 209.493 105 199 105V107ZM-1 86C-1 97.598 8.40202 107 20 107V105C9.50659 105 1 96.4934 1 86H-1ZM160 1C170.493 1 179 9.50659 179 20H181C181 8.40202 171.598 -1 160 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#318E4D" mask="url(#path-1-inside-1_1_77)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_77" x1="109.5" y1="0" x2="109.5" y2="106" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#318E4D" />
                                            <stop offset="1" stop-color="#135426" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <IoArrowForwardOutline className="absolute top-2 right-2 text-[20px] text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bottom-section mt-10 relative">
                <svg width="100%" viewBox="0 0 1490 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60 119C26.8629 119 0 145.863 0 179V205C0 207.761 2.23856 210 4.99998 210H1498C1505.73 210 1512 203.732 1512 196V60C1512 26.8629 1485.14 0 1452 0H775.962C755.983 0 737.315 9.94459 726.168 26.5251L681.832 92.4749C670.685 109.055 652.017 119 632.038 119H60Z" fill="#DCEEE2" />
                </svg>
                <div className="absolute res-bottom-shap-2-absolute right-[60px] top-[60px]">
                    <div className="relative">
                        <svg className="res-bottom-shap-2" width="812" height="169" viewBox="0 0 812 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.94805 106.571C-11.0399 133.133 7.9885 169 40.0681 169H771.434C793.526 169 811.434 151.091 811.434 129V40C811.434 17.9086 793.526 0 771.434 0H100.34C87.0685 0 74.6613 6.58226 67.2197 17.5708L6.94805 106.571Z" fill="#C4C4C4" />
                        </svg>
                        <div className="w-[124px] mb-[6px] flex items-center justify-center h-[124px] rounded-[50%] bg-[#13542674] absolute top-[50%] left-[50%] video-icon">
                            <div className="w-[82px] h-[82px] rounded-[50%] bg-[#135426] flex items-center justify-center border-[1px] border-[#318E4D]">
                                <FaPlay className="text-[32px] text-white play-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
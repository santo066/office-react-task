import "../../../app.css"
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";


export default function Works() {
    return (
        <div className="bg-[#DCEEE2] pt-[100px] pb-[100px] work-section">
            <div className=" max-w-[1280px] mx-auto">
                <div className="mb-16 work-section-top">
                    <h2 className="font-38 text-[48px] text-[#04170A] font-semibold">How it’s <span className="text-[#318E4D]">works?</span></h2>
                </div>
                <div className="flex justify-between items-end work-flex">
                    <div className="relative w-[732px] work-flex-left">
                        <svg width="732" height="320" viewBox="0 0 732 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30C0 13.4315 13.4315 0 30 0H524.557C534.376 0 543.573 4.80449 549.181 12.8634L560.506 29.1366C566.115 37.1955 575.312 42 585.13 42L702 42C718.569 42 732 55.4315 732 72V290C732 306.569 718.569 320 702 320H30C13.4315 320 0 306.569 0 290V30Z" fill="#04170A" />
                        </svg>
                        <svg className="absolute top-[10px] right-[7px]" width="291" height="300" viewBox="0 0 291 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M103.016 8.60169C99.2787 3.21392 93.1383 0 86.5815 0H20C8.95431 0 0 8.9543 0 20V280C0 291.046 8.9543 300 20 300H271C282.046 300 291 291.046 291 280V62.5922C291 51.5465 282.046 42.5922 271 42.5922L137.059 42.5922C130.502 42.5922 124.362 39.3783 120.625 33.9905L103.016 8.60169Z" fill="#C4C4C4" />
                        </svg>
                        <div className="bg-[#DCEEE2] step absolute top-[45px] left-[45px] rounded-[24px]">
                            <span>Step 01</span>
                        </div>
                        <div className="absolute top-[105px] left-[45px]">
                            <h2 className="text-[40px] font-semibold text-white max-w-[280px]">Sign Up & Create Your Avatar</h2>
                        </div>
                    </div>
                    <div className="work-flex-right w-[516px] h-[275px] bg-[#04170A] rounded-[30px] relative">
                        <div className="h-[255px] w-[133px] bg-[#C4C4C4] rounded-[30px] absolute top-[10px] left-[10px]">
                        </div>
                        <div className="absolute top-[46px] right-[26px]">
                            <p className="max-w-[298px] text-[20px] text-white font-medium">Create a personalized account and design your avatar for the metaverse.</p>
                            <Button variant={"primary"} className='mt-[40px]'>Get Started</Button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-9 work-bottom">
                    <div>
                        <span className="text-[20px] text-[#318E4D] font-bold">Step 02</span>
                        <p className="max-w-[312px] text-[20px] text-[#38453C] font-medium">Explore immersive worlds and vibrant hubs.</p>
                    </div>
                    <a href="#">
                        <div className="border-[1px] border-[#318E4D] py-[5px] px-[10px] rounded-[50px] flex max-w-[140px] max-h-[50px] items-center gap-3">
                            <div className="bg-[#318E4D] rounded-[50px] py-1 px-3">
                                <span className="text-[20px] text-white font-medium">Next</span>
                            </div>
                            <IoMdArrowForward className="text-[28px] text-[#318E4D] font-medium" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
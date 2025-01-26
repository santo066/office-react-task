import { Button } from "@/components/ui/button";

import logo from '.././../assets/Hero Subtitle.png'


export default function Footer() {
    return (
        <div className="bg-[#04170A] py-[120px]">
            <div className="max-w-[1280px] mx-auto flex justify-between">
                <div className="flex flex-col justify-between">
                    <div>
                        <input className="bg-[#061F0D] py-4 px-5 rounded-[30px] w-[330px] text-white" type="email" name="email" id="" placeholder="Enter your email here" />
                        <Button variant={"primary_btn"} className='mt-[40px] rounded-[30px]'>Contact us</Button>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <ul className="flex gap-[40px]">
                        <li className="text-white text-[20px] font-medium hover:text-[#318E4D]"><a href="#">About.</a></li>
                        <li className="text-white text-[20px] font-medium hover:text-[#318E4D]"><a href="#">Service</a></li>
                        <li className="text-white text-[20px] font-medium hover:text-[#318E4D]"><a href="#">Tools</a></li>
                        <li className="text-white text-[20px] font-medium hover:text-[#318E4D]"><a href="#">Contacts</a></li>
                    </ul>
                    <div className="mt-[200px] flex items-end justify-between">
                        <div>
                            <div className="mb-14">
                                <span className="text-[20px] font-bold text-white block mb-4">Contact Us</span>
                                <span className="text-[20px] font-normal text-white block">+1 (999) 888-77-66</span>
                                <span className="text-[20px] font-normal text-white block">hello@niskalastd.com</span>
                            </div>
                            <div>
                                <span className="text-[20px] font-bold text-white block mb-4">Location</span>
                                <span className="text-[20px] font-normal text-white block">483920, Indonesia,</span>
                                <span className="text-[20px] font-normal text-white block">Lampung 22/2/5, Office 4</span>
                            </div>
                        </div>
                        <div className="text-end">
                            <p className="text-white text-[20px] mb-4">Languages</p>
                            <ul className="flex gap-5">
                                <li className="text-white text-[20px] hover:text-[#318E4D] font-normal">En</li>
                                <li className="text-white text-[20px] hover:text-[#318E4D] font-normal">Es</li>
                                <li className="text-white text-[20px] hover:text-[#318E4D] font-normal">Fr</li>
                                <li className="text-white text-[20px] hover:text-[#318E4D] font-normal">De</li>
                                <li className="text-white text-[20px] hover:text-[#318E4D] font-normal">Ru</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
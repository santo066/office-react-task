import '../../../app.css'
import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";



export default function SocialWorld() {
    return (
        <div className="bg-[#DCEEE2] pt-16 pb-[100px] SocialWorld-section">
            <div className="max-w-[600px] text-center mx-auto SocialWorld-section-top">
                <h2 className="text-[48px] font-semibold text-[#04170A]">Metaverse, Meet Your Social World</h2>
            </div>
            <div className="max-w-[1280px] mx-auto flex justify-between items-center mt-16 social-world-wrapper">
                <div className="social-left w-[626px] h-[489px] relative">
                    <svg width="626" height="489" viewBox="0 0 626 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2031_5" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M626 30C626 13.4315 612.569 0 596 0H30C13.4315 0 0 13.4315 0 30V400.069C0 416.637 13.4315 430.069 30 430.069H153.816C163.634 430.069 172.831 434.873 178.439 442.932L201.548 476.137C207.156 484.195 216.353 489 226.171 489H596C612.569 489 626 475.569 626 459V30Z" />
                        </mask>
                        <path d="M201.548 476.137L200.727 476.708L201.548 476.137ZM30 1H596V-1H30V1ZM1 400.069V30H-1V400.069H1ZM30 431.069H153.816V429.069H30V431.069ZM177.619 443.503L200.727 476.708L202.368 475.565L179.26 442.361L177.619 443.503ZM596 488H226.171V490H596V488ZM625 30V459H627V30H625ZM596 490C613.121 490 627 476.121 627 459H625C625 475.016 612.016 488 596 488V490ZM200.727 476.708C206.522 485.035 216.026 490 226.171 490V488C216.68 488 207.79 483.356 202.368 475.565L200.727 476.708ZM153.816 431.069C163.307 431.069 172.197 435.713 177.619 443.503L179.26 442.361C173.465 434.033 163.961 429.069 153.816 429.069V431.069ZM-1 400.069C-1 417.189 12.8792 431.069 30 431.069V429.069C13.9837 429.069 1 416.085 1 400.069H-1ZM596 1C612.016 1 625 13.9837 625 30H627C627 12.8792 613.121 -1 596 -1V1ZM30 -1C12.8792 -1 -1 12.8792 -1 30H1C1 13.9837 13.9837 1 30 1V-1Z" fill="#318E4D" mask="url(#path-1-inside-1_2031_5)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M606 40C606 28.9543 597.046 20 586 20H40C28.9543 20 20 28.9543 20 40V389.361C20 400.407 28.9543 409.361 40 409.361H175.503C182.06 409.361 188.2 412.575 191.937 417.963L221.369 460.398C225.106 465.786 231.247 469 237.803 469H586C597.046 469 606 460.046 606 449V40Z" fill="#C4C4C4" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M606 40C606 28.9543 597.046 20 586 20H40C28.9543 20 20 28.9543 20 40V389.361C20 400.407 28.9543 409.361 40 409.361H175.503C182.06 409.361 188.2 412.575 191.937 417.963L221.369 460.398C225.106 465.786 231.247 469 237.803 469H586C597.046 469 606 460.046 606 449V40Z" fill="url(#paint0_linear_2031_5)" />
                        <defs>
                            <linearGradient id="paint0_linear_2031_5" x1="590" y1="125.5" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#04170A" stop-opacity="0" />
                                <stop offset="1" stop-color="#04170A" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='absolute bottom-[120px] left-[60px]'>
                        <div className="w-[355px] h-[110px] bg-[#13542643] border-[1px] border-[#318E4D] rounded-[30px] flex justify-center items-center">
                            <div className="w-[331px] h-[90px] bg-[#13542643] border-[1px] border-[#318E4D] rounded-[30px] under-div flex justify-center items-center">
                                <p className='text-[20px] max-w-[300px] font-medium text-white'>Empower users to create and customize their metaverse.</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[36px] font-bold text-white max-w-[160px] absolute left-[60px] top-[60px]'>Virtual World Creation</h3>
                    <div className='w-[66px] h-[66px] bg-[#DCEEE2] rounded-[20px] absolute top-[34px] right-[34px] flex items-center justify-center'>
                        <span className='w-[27px] h-[27px] rounded-[50%] border-[1px] border-[#318E4D] flex items-center justify-center'>
                            <FaAngleRight className='text-[#318E4D]' />

                        </span>
                    </div>
                </div>
                <div className='relative social-right'>
                    <svg width="622" height="489" viewBox="0 0 622 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30C0 13.4315 13.4314 0 30 0H411.557C421.376 0 430.573 4.80449 436.181 12.8634L447.506 29.1366C453.115 37.1955 462.312 42 472.13 42L592 42C608.569 42 622 55.4315 622 72V459C622 475.569 608.569 489 592 489H30C13.4315 489 0 475.569 0 459V30Z" fill="#04170A" />
                    </svg>
                    <div className='absolute top-[20px] left-[20px]'>
                        <svg width="278" height="449" viewBox="0 0 278 449" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.951 8.60168C97.2145 3.21392 91.0741 0 84.5172 0H20C8.9543 0 0 8.95431 0 20V429C0 440.046 8.95431 449 20 449H258C269.046 449 278 440.046 278 429V52.5922C278 41.5465 269.046 32.5922 258 32.5922L128.059 32.5922C121.502 32.5922 115.362 29.3783 111.625 23.9905L100.951 8.60168Z" fill="#C4C4C4" />
                        </svg>
                    </div>
                    <div className='max-w-[235px] absolute right-[45px] top-[80px]'>
                        <h3 className='text-[36px]/[130%] font-bold text-white max-w-[200px] mb-[34px]'>Virtual Events Hosting</h3>
                        <p className='text-[20px] font-medium text-white'>Provide tools for virtual concerts, conferences, and workshops.</p>
                        <Button variant={"primary"} className='mt-[40px]'>Get Started</Button>
                    </div>
                    <div className="w-[64px] mb-[6px] flex items-center justify-center h-[64px] rounded-[50%] bg-[#DCEEE239] border-[#DCEEE2] absolute bottom-[40px] left-[40px]">
                        <div className="w-[45px] h-[45px] rounded-[50%] bg-[#DCEEE2] flex items-center justify-center">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.03846H16M5.61538 8.5L3.88462 10.2308L5.61538 11.9615M11.9615 8.5L13.6923 10.2308L11.9615 11.9615M7.92308 12.5385L9.65385 7.34615M2.15385 1H14.8462C15.4834 1 16 1.51659 16 2.15385V14.8462C16 15.4834 15.4834 16 14.8462 16H2.15385C1.51659 16 1 15.4834 1 14.8462V2.15385C1 1.51659 1.51659 1 2.15385 1Z" stroke="#04170A" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";


import '../../../app.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
    return (
        <div className="bg-[#DCEEE2] pt-[100px] pb-[100px] slider-section-wrapper">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center text-flex">
                <div className="max-w-[550px] slider-title-text">
                    <p className="text-[20px] text-[#318E4D] uppercase">Why choose us</p>
                    <h2 className="text-[48px]/[130%] font-semibold text-[#04170A]">Accessible Metaverse, Anytime, <span className="text-[#318E4D]">Anywhere</span></h2>
                </div>
                <div className="max-w-[400px] slider-title-text-p">
                    <p className="text-[#04170A] text-[20px] font-semibold mb-4">Monetize Your Virtual Dreams</p>
                    <p className="text-[#38453C] text-[20px] font-normal mb-4">A platform designed for all devices, delivering seamless access and optimized performance to keep you connected to your digital universe.</p>
                </div>
            </div>
            <div className="slider-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='h-[414px] single-slider rounded-[20px] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] rounded-[20px] bg-[#04170A] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] single-slider rounded-[20px] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] rounded-[20px] bg-[#04170A] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] single-slider rounded-[20px] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] rounded-[20px] bg-[#04170A] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] single-slider rounded-[20px] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] rounded-[20px] bg-[#04170A] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] single-slider rounded-[20px] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[414px] rounded-[20px] bg-[#04170A] relative'>
                            <span className='text-[20px] absolute top-[40px] left-[33px] font-normal text-white'>02/</span>
                            <div className='absolute top-[30px] right-[30px] w-[53px] h-[53px] bg-[#13542643] border-[1px] border-[#DCEEE2] rounded-[50%] flex justify-center items-center'>
                                <div className='w-[33px] h-[33px] bg-[#DCEEE2] rounded-[50%] flex justify-center items-center'><CiGlobe className='text-[20px] text-[#318E4D]' />
                                </div>
                            </div>
                            <div className='absolute bottom-[99px] left-[30px]'>
                                <span className='text-[20px]  text-white font-semibold'>Metaverse</span>
                                <p className='text-[32px]/[120%] mt-3 text-white font-semibold'>Immersive <span className='block'> Experiences</span></p>
                            </div>
                            <div className='absolute bottom-[30px] left-[38px] flex items-center gap-3'>
                                <a href="#" className='text-white text-[20px]/[130%] font-semibold underline'>Explore more</a>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#318E4D] flex justify-center items-center'>
                                    <IoMdArrowForward className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
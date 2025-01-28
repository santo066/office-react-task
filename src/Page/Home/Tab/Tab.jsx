import '../../../app.css'
export default function Tab() {
    return (
        <div className="bg-[#DCEEE2] pb-[200px] relative h-[900px] tab-section-wrapper">
            <div className="max-w-[600px] text-center mx-auto mb-[100px] font-wrapper">
                <h2 className="text-[55px] font-semibold text-[#04170A] font">Learn and Grow in the <span className="text-[#318E4D]">Metaverse</span></h2>
            </div>
            <div>
                <div className="w-[1056px] h-[479px] bg-[#C4C4C4] mx-auto rounded-[40px] relative tab-middle-wrapper">
                    <div className="py-[10px] px-[12px] bg-[#DCEEE239] rounded-[40px]  mx-auto inline-block tab-btn-group">
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Monetize</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">VirtualReality</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Game</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Learn</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Create</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Blockhain</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Metaverse</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Worlds</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Vision</a>
                        <a href="#" className="py-[6.5px] px-[17px] text-[#04170A] bg-[#DCEEE2] rounded-[24px] ">Thrive</a>
                    </div>
                    <div className='absolute top-[30px] left-[30px]'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" fill-opacity="0.22" />
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                            <path d="M25.3846 10H28.4615C28.8696 10 29.2609 10.1621 29.5494 10.4506C29.8379 10.7391 30 11.1304 30 11.5385V14.6154M10 14.6154V11.5385C10 11.1304 10.1621 10.7391 10.4506 10.4506C10.7391 10.1621 11.1304 10 11.5385 10H14.6154M25.3846 30H28.4615C28.8696 30 29.2609 29.8379 29.5494 29.5494C29.8379 29.2609 30 28.8696 30 28.4615V25.3846M10 25.3846V28.4615C10 28.8696 10.1621 29.2609 10.4506 29.5494C10.7391 29.8379 11.1304 30 11.5385 30H14.6154" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <a href="#">
                        <div className='w-[170px] h-[102px] bg-[#04170A] absolute right-[18px] top-[18px] rounded-[80px] flex justify-center items-center'>
                            <div className='flex gap-[10px] items-center'>
                                <p className='text-[20px] max-w-[50px] font-medium text-white'>360° View</p>
                                <div className='w-[82px] h-[82px] bg-[#DCEEE2] flex justify-center items-center rounded-[50%]'>
                                    <div className='w-[62px] h-[62px] bg-[#318E4D]  flex justify-center items-center rounded-[50%]'>
                                        <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.30318 26.9999L1.48514 22.1819M1.48514 22.1819L6.30318 17.3638M1.48514 22.1819H15.9393C17.643 22.1819 19.277 21.505 20.4818 20.3003C21.6865 19.0956 22.3633 17.4616 22.3633 15.7578V12.5458" stroke="#DCEEE2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.7423 0.500221L21.5603 5.31826M21.5603 5.31826L16.7423 10.1363M21.5603 5.31826H7.10618C5.40241 5.31826 3.76843 5.99508 2.56369 7.19982C1.35894 8.40457 0.682124 10.0386 0.682124 11.7423V14.9543" stroke="#DCEEE2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='shap-1 w-[343px] h-[318px] bg-[#C4C4C4] rounded-[30px] top-0 left-[-145px] absolute'></div>
            <div className='shap-2 w-[194px] h-[181px] bg-[#C4C4C4] rounded-[30px] top-0 right-[15px] absolute'></div>
            <div className='w-[259px] h-[318px] bg-[#C4C4C4] rounded-l-[30px] bottom-0 right-[0px] absolute shap-4'></div>
            <div className='w-[315px] h-[195px] bg-[#C4C4C4] rounded-[30px] bottom-0 left-[-116px] absolute shap-3'></div>
        </div>
    )
}
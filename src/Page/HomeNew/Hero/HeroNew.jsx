import { Button } from "@/components/ui/button";
import animationimage from "../../../assets/Screenshot_79-removebg-preview.png"
import img from "../../../assets/Screenshot_81-removebg-preview.png"
import img2 from "../../../assets/Screenshot_82.png"

import { Tilt } from 'react-tilt'
const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function HeroNew() {
    return (
        <div className="">
            <div className="max-w-[1640px] mx-auto pb-[300px] pt-[150px] flex justify-between">
                <div>
                    <h1 className="text-[80px]/[120%] font-bold max-w-[860px] mb-16">Join Forces, Innovate Freely, and Reap the Rewards</h1>
                    <p className="max-w-[430px] text-[20px] font-normal">The creator subscription platform for the future. Sign up before the end of the month & take home 85% for 3 months!</p>
                    <div className="mt-9">
                        <Button variant={'homeNewButton'}>Sign Up</Button>
                    </div>
                </div>
                <div className="flex items-end">
                    {/* animation element */}
                    <Tilt className={"flex items-center justify-center"} options={defaultOptions} style={{ height: "100%", width: "500px" }}>
                        <div className="ml-[-120px]">
                            <img className="w-[500px]" src={animationimage} alt="animation image" />
                        </div>
                    </Tilt>
                    <div className="mb-[-300px]">
                        <img src={img2} alt="" />
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import SocialWorld from "./SocialWorld/SocialWorld";
import Tab from "./Tab/Tab";
import Works from "./Works/Works";

export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <SocialWorld></SocialWorld>
            <Tab></Tab>
            <Slider></Slider>
            <Works></Works>
        </div>
    )
}
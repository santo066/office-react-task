import FeatureNew from "./Feature/FeatureNew";
import HeroNew from "./Hero/HeroNew";
import SliderNew from "./SliderNew/SliderNew";

export default function HomeNew() {
    return (
        <div className="bg-[#f7f6f2]">
            <HeroNew></HeroNew>
            <SliderNew></SliderNew>
            <FeatureNew></FeatureNew>
        </div>
    )
}
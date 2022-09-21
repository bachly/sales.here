import { LinkAsButton, LinkWithChevron } from "./Link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Container from "./Container";
import Button from "./Button";

export default function BannerSliderWithImage() {
    return <div className="pb-12">
        <Splide options={{
            gap: '1rem',
            arrows: false
        }}>
            <SplideSlide>
                <div className="h-96 relative overflow-hidden">
                    <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_1.jpg" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="h-96 relative overflow-hidden">
                    <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_2.jpg" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="h-96 relative overflow-hidden">
                    <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_3.jpg" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="h-96 relative overflow-hidden">
                    <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_4.jpg" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="h-96 relative overflow-hidden">
                    <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_5.jpg" />
                </div>
            </SplideSlide>
        </Splide>
    </div>

}
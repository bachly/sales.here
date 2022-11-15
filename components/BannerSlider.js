import { LinkAsButton, LinkWithChevron } from "./Link";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function BannerSliderWithImage({ images }) {
    return <div className="pb-12">
        <Splide options={{
            gap: '1rem',
            arrows: false
        }}>
            {images.map(({ src, alt }) => {
                return <SplideSlide>
                    <div className="h-96 relative overflow-hidden">
                        <img className="h-full absolute left-0 w-full z-0" src="/img/web_hero_1.jpg" />
                    </div>
                </SplideSlide>
            })}
        </Splide>
    </div>

}
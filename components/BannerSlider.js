import { LinkAsButton, LinkWithChevron } from "../components/Link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Container from "./Container";
import Button from "./Button";

export default function BannerSlider() {
    return <div className="bg-gray-50 w-full">
        <Splide options={{
            gap: '1rem',
            arrows: false
        }}>
            <SplideSlide>
                <div className="h-full">
                    <Container className="h-full">
                        <div className="h-full relative overflow-hidden">
                            <div className="pt-12 pb-32 relative z-10">
                                <div className="pt-32"></div>
                                <div className="">
                                    <span className="inline-block text-3xl bg-black text-white py-1 px-5">BIG ADVENTURE</span>
                                    <br />
                                    <span className="mt-1 inline-block text-8xl font-black font-sans bg-primary py-1 px-5">BIG SALE</span>
                                    <br />
                                    <span className="mt-1 inline-block text-3xl font-semibold bg-black py-1 px-5 text-white font-serif">ONLY 2 DAYS LEFT</span>
                                </div>
                                <div className="mt-16">
                                    <LinkAsButton href="/" className="">Shop now</LinkAsButton>
                                </div>
                            </div>
                            <img className="h-full absolute bottom-0 right-0 z-0" src="/img/man-woman-binoculars.png" />
                        </div>
                    </Container>
                </div>
            </SplideSlide>
            <SplideSlide>

                <Container>
                    <div className="relative overflow-hidden">
                        <div className="pt-12 pb-32 relative z-10">
                            <div className="pt-32"></div>
                            <div className="">
                                <span className="text-6xl">NEW ARRIVAL</span>
                                <br />
                                <span className="text-8xl font-black font-sans">TRACKSUITS</span>
                                <br />
                                <span className="mt-2 inline-block text-4xl font-semibold bg-primary text-black py-1 px-5 text-white rounded-lg font-serif">UP TO 30% OFF</span>
                            </div>
                            <div className="mt-16">
                                <LinkAsButton href="#">Shop now</LinkAsButton>
                            </div>
                        </div>
                        <img className="h-full absolute top-0 right-0 z-0" src="/img/girl-runnning-phone.png" />
                    </div>
                </Container>
            </SplideSlide>
            <SplideSlide>
                <div className="h-full">
                    <Container className="h-full">
                        <div className="h-full relative overflow-hidden">
                            <div className="pt-12 pb-32 relative z-10 flex flex-col items-center">
                                <div className="pt-32"></div>
                                <div className="text-center">
                                    <span className="inline-block px-2 text-3xl bg-white bg-opacity-70">TOP 100 IDEAS FOR</span>
                                    <span className="mt-1 block px-4 text-8xl font-black font-sans bg-white bg-opacity-70">CAMPING</span>
                                </div>
                                <div className="mt-16">
                                    <LinkAsButton href="/" secondary>View article</LinkAsButton>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-0 top-0 left-0 w-full h-full bg-image bg-bottom" style={{ backgroundImage: "url(/img/baikang-yuan-VDYAsdbHVhc-unsplash.jpeg)" }}></div>
                    </Container>
                </div>
            </SplideSlide>
        </Splide>
    </div>

}
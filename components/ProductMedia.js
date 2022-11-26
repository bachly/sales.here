import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useRef, useState } from "react"

export default function ProductMedia({ media = [] }) {
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        slider1.current.sync(slider2.current.splide);
    }, [slider1, slider2]);

    function handleClickOnThumbnail(splide, prev, next) {
        console.log("splide:", splide, prev, next);
        if (slider1.current) {
            slider1.current.go(prev.index);
        }
    }

    return <div id="productMedia">
        <div className="w-full relative">
            <div className="flex items-start">
                <div id="thumbnailSlides" className="hidden lg:block">
                    <Splide
                        ref={(slider) => (slider2.current = slider)}
                        onClick={handleClickOnThumbnail}
                        options={{
                            pagination: false,
                            fixedWidth: 80,
                            gap: 10,
                            rewind: false,
                            direction: 'ttb',
                            height: '100%',
                            arrows: false,
                            speed: 0
                        }}>
                        {media.map((item, index) => {
                            switch (item.type) {
                                case "image":
                                    return <SplideSlide key={index} >
                                        <img src={item.src} />
                                    </SplideSlide>
                                default:
                                    return <></>
                            }
                        })}
                    </Splide>
                </div>
                <div className="lg:pl-8">
                    <Splide
                        ref={(slider) => (slider1.current = slider)}
                        options={{
                            perPage: 1,
                            pagination: false,
                            arrows: false,
                            speed: 0,
                            breakpoints: {
                                1280: {
                                    type: 'loop',
                                    arrows: true,
                                    perPage: 1,
                                },
                            }
                        }}>
                        {media.map((item, index) => {
                            switch (item.type) {
                                case "image":
                                    return <SplideSlide key={index}>
                                        <img src={item.src} />
                                    </SplideSlide>
                                default:
                                    return <></>
                            }
                        })}
                    </Splide>
                </div>
            </div>
        </div>
    </div>
}
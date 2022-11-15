import { Splide, SplideSlide } from "@splidejs/react-splide"

export default function ProductMedia({ media = [] }) {
    return <div id="productMedia">
        <div className="w-full relative">
            <Splide options={{
                perPage: 1,
                pagination: false,
                arrows: false
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

            <Splide options={{
                pagination: false,
                fixedWidth: 100,
                gap: 10,
                rewind: true,
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
}
import { LinkAsButton, LinkWithChevron } from "./Link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Container from "./Container";

function ProductThumbnail({ title, price }) {
    return <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
        <div className="pb-1/1 bg-gray-100 bg-contain bg-image bg-no-repeat bg-center"
            style={{ backgroundImage: "url(/img/man-woman-binoculars.png)" }}></div>
        <div className="flex-1">
            <div className="h-full py-3 px-4 flex flex-col">
                <div className="h4 text-center flex-1">
                    {title}
                </div>
                <div className="mt-12 h5 text-center">
                    {price}
                </div>
            </div>
        </div>
    </div>
}

export default function FeaturedProducts({ title }) {
    return <div className="bg-gray-50 w-full py-16">
        <Container>
            <h2>Featurd Products</h2>
        </Container>
        <Container className="mt-12">
            <Splide options={{
                gap: '1.5rem',
                fixedWidth: "28%"
            }}>
                <SplideSlide>
                    <ProductThumbnail title="Belkin BOOST CHARGE™ PRO 3-in-1 Wireless Charging Pad with MagSafe" price="$45"></ProductThumbnail>
                </SplideSlide>
                <SplideSlide>
                    <ProductThumbnail title="20W USB-C Power Adapter" price="$25"></ProductThumbnail>
                </SplideSlide>
                <SplideSlide>
                    <ProductThumbnail title="20W USB-C Power Adapter" price="$25"></ProductThumbnail>
                </SplideSlide>
                <SplideSlide>
                    <ProductThumbnail title="20W USB-C Power Adapter" price="$25"></ProductThumbnail>
                </SplideSlide>
            </Splide>
        </Container>
    </div>

}
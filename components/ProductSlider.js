import { Splide, SplideSlide } from '@splidejs/react-splide';
import Container from "./Container";
import { LinkWithChevron } from './Link';

function ProductThumbnail({ img, title, price }) {
    const cleanImgSrc = img.replaceAll(' ', '\\ ');
    return <div className="h-full bg-white rounded-xl overflow-hidden shadow-xs flex flex-col">
        <div className="pb-1/1 bg-contain bg-image bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${cleanImgSrc})` }}></div>
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

export default function ProductSlider({ title, products }) {
    return <div className="bg-gray-50 w-full pt-16 pb-20">
        <Container>
            <div className="flex items-center justify-between">
                <h2>{title}</h2>
                <LinkWithChevron href="#">View all</LinkWithChevron>
            </div>
        </Container>
        <Container className="mt-6">
            <div className="-ml-4 -mr-4">
                <Splide
                    options={{
                        gap: '1rem',
                        perPage: 4,
                        padding: {
                            left: '1rem',
                            right: '1rem'
                        }
                    }}>
                    {products.map(product => {
                        return <SplideSlide className="py-4">
                            <ProductThumbnail
                                img={product.img}
                                title={product.title}
                                price={`$${product.price}`}></ProductThumbnail>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </Container>
    </div>

}
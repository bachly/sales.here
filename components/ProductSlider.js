import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import Container from "./Container";
import { ArrowRight } from './Icons';
import { LinkAsButton, LinkWithChevron } from './Link';

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
    return <div className="bg-gray-50 w-full pt-12 pb-20">
        <Container>
            <div className="flex items-center">
                <h2>{title}</h2>
                <Link href="#">
                    <a className="ml-4">
                        <ArrowRight />
                    </a>
                </Link>
            </div>
        </Container>
        <Container className="mt-4">
            <div className="-ml-4 -mr-4">
                <Splide
                    options={{
                        gap: '1rem',
                        perPage: 4
                    }}>
                    {products.map(product => {
                        return <SplideSlide key={product.sku} className="py-4">
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
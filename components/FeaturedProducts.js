import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import Container from "./Container";
import { ArrowRight } from './Icons';

function ProductThumbnail({ featuredImage, title, priceRange }) {
    const cleanImgSrc = featuredImage?.url;
    return <div className="h-full bg-white border border-neutral-100 shadow-sm rounded-xl overflow-hidden flex flex-col">
        <div className="pb-1/1 bg-cover bg-image bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${cleanImgSrc})` }}></div>
        <div className="flex-1">
            <div className="h-full py-3 px-4 flex flex-col">
                <div className="text-center flex-1">
                    {title}
                </div>
                <div className="mt-12 text-sm text-neutral-500 text-center">
                    From {priceRange?.minVariantPrice.amount} {priceRange?.minVariantPrice.currencyCode}
                </div>
            </div>
        </div>
    </div>
}

export default function FeaturedProducts({ title, products }) {
    return <div className="pt-12 pb-20">
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
            <div className="">
                <Splide
                    options={{
                        gap: '0.5rem',
                        perPage: 4
                    }}>
                    {products.map(product => {
                        return <SplideSlide key={product.handle} className="py-4">
                            <ProductThumbnail {...product}></ProductThumbnail>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </Container>
    </div>

}
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import ProductThumbnail from './ProductThumbnail';


export default function FeaturedProducts({ title, products, collection }) {
    return <div className="pt-12 pb-20">
        <div className="max-w-9xl mx-auto">
            <div className="text-center">
                <h2>{title}</h2>
            </div>
            <Splide
                options={{
                    gap: '0.5rem',
                    perPage: 8
                }}>
                {products.map(product => {
                    return <SplideSlide key={product.title} className="py-4">
                        <ProductThumbnail product={product} collection={collection}></ProductThumbnail>
                    </SplideSlide>
                })}
            </Splide>
            <div className="mt-4 text-center">
                <Link href="#">
                    <a className="">
                        View all
                    </a>
                </Link>
            </div>
        </div>
    </div>
}
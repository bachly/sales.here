import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import Container from "./Container";
import { ArrowRight } from './Icons';

function ProductThumbnail({ image, title }) {
    return <div className="h-full bg-white border border-neutral-100 shadow-md rounded-sm overflow-hidden flex flex-col">
        <div className="flex-1 py-12 px-1 flex items-center">
            <img src={`${image}`} />
        </div>
        <div className="h-32">
            <div className="h-full py-3 px-4 flex flex-col">
                <div className="text-center flex-1">
                    {title}
                </div>
                <div className="text-sm text-neutral-500 text-center">
                    From
                </div>
            </div>
        </div>
    </div>
}

export default function FeaturedProducts({ title, products }) {
    return <div className="pt-12 pb-20">
        <div className="flex items-center">
            <h2>{title}</h2>
            <Link href="#">
                <a className="ml-4">
                    View all
                </a>
            </Link>
        </div>
        <Splide
            options={{
                gap: '0.5rem',
                perPage: 5
            }}>
            {products.map(product => {
                return <SplideSlide key={product.title} className="py-4">
                    <ProductThumbnail {...product}></ProductThumbnail>
                </SplideSlide>
            })}
        </Splide>
    </div>

}
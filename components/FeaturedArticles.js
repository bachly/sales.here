import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import Container from "./Container";
import { ArrowRight } from './Icons';
import { LinkWithChevron } from './Link';

function ArticleThumbnail({ img, title }) {
    const cleanImgSrc = img.replaceAll(' ', '\\ ');
    return <div className="h-full shadow-xs flex flex-col">
        <div className="pb-1/1 rounded-xl overflow-hidden bg-contain bg-image bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${cleanImgSrc})` }}></div>
        <div className="flex-1">
            <div className="h-full py-3 px-4 flex flex-col">
                <div className="h4 flex-1">
                    {title}
                </div>
                <div className="mt-4 flex items-center">
                    <div className="text-sm text-gray-500 mr-2">2 min read</div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-md ml-2">Cooking</div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-md ml-2">Money</div>
                </div>
            </div>
        </div>
    </div>
}

export default function FeaturedArticles({ title, posts }) {
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
                        gap: '1.5rem',
                        perPage: 3
                    }}>
                    {posts.map(post => {
                        return <SplideSlide key={post.slug} className="py-4">
                            <ArticleThumbnail
                                img={post.image.url}
                                title={post.title}></ArticleThumbnail>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </Container>
    </div>

}
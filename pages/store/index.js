import Image from "next/future/image";
import FeaturedProducts from "../../components/FeaturedProducts";
import LayoutStore from "../../components/LayoutStore";
import { getAllCollections } from "../../lib/api";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const DEMO_BASE_URL = '/store';

export default function HomepageForOnlineStore({ featuredCollections, collections, featuredProducts }) {
    return <LayoutStore>
        {featuredCollections && featuredCollections.length > 0 &&
            <section id="hero">
                <div className="max-w-9xl mx-auto">
                    <Splide options={{
                        type: 'loop',
                        gap: '1rem',
                        perPage: 1,
                        arrows: false,
                        padding: '20%'
                    }}>
                        {featuredCollections.map(collection => {
                            return <SplideSlide key={collection.slug}>
                                <Link href={`${DEMO_BASE_URL}/collection/${collection.slug}`} passHref={true} key={collection.slug}>
                                    <a>
                                        <div className="pb-2/3 bg-light relative">
                                            <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                                        </div>
                                    </a>
                                </Link>
                            </SplideSlide>
                        })}
                    </Splide>
                </div>
            </section>}

        <section id="features" className="mt-16">
            <div className="max-w-9xl mx-auto px-4">

                <div className="text-center">
                    <h2>Shop the sale</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map(collection => {
                        return <Link href={`${DEMO_BASE_URL}/collection/${collection.slug}`} passHref={true} key={collection.slug}>
                            <a className="block">
                                <div className="pb-2/3 relative bg-light">
                                    <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                                </div>
                                <div className="w-full text-center py-2 px-4 text-dark">
                                    {collection.title}
                                </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </section>

        {featuredProducts &&
            <FeaturedProducts title={"Best Sellers This Week"} products={featuredProducts} />
        }
    </LayoutStore>
}

export function getStaticProps() {
    const collections = getAllCollections({
        fields: ["title", "image", "slug"]
    });

    const featuredCollections = collections.filter(collection => {
        return [
            "tommy-hilfiger-lacoste-hugo-boss-watches",
            "fashion-footwear-accessories-and-more",
            "personalised-gifts"
        ].indexOf(collection.slug) >= 0
    })

    return {
        props: {
            collections,
            featuredCollections
        }
    }
}
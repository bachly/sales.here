import Image from "next/future/image";
import LayoutStore from "../../components/LayoutStore";
import { getStoreCollections, getStoreFeaturedCollections } from "../../lib/utils";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const DEMO_BASE_URL = '/store';
const SHOP_NAME = 'Fauget';

export default function HomepageForOnlineStore({ featuredCollections, collections, featuredProducts }) {
    console.log('featuredCollections', featuredCollections)

    return <LayoutStore>
        {featuredCollections && Object.keys(featuredCollections).length > 0 &&
            <section id="hero">
                <div className="mx-auto">
                    <Splide options={{
                        type: 'loop',
                        gap: '1rem',
                        perPage: 2,
                        arrows: false,
                        padding: '5%'
                    }}>
                        {Object.keys(featuredCollections).map(collectionSlug => {
                            const collection = featuredCollections[collectionSlug];
                            return <SplideSlide key={collectionSlug}>
                                <Link href={`${DEMO_BASE_URL}/collection/${collectionSlug}`} passHref={true} key={collectionSlug}>
                                    <a>
                                        <div className="pb-2/3 relative bg-light">
                                            <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} priority fill={true} />
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
                    <h2 className="text-primary">Welcome to {SHOP_NAME}</h2>

                    <p className="mt-6 max-w-lg mx-auto">Here is a section to introduce what your store is all about. Briefly explain what products you are selling, your brand signatures and what is so unique about your store.</p>

                    <button className="bg-primary text-white py-2 px-4 mt-4 hover:bg-secondary transition duration-200">Browse products</button>
                </div>
            </div>
        </section>

        <section id="features" className="mt-16">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center">
                    <h2 className="text-primary">Our Collections</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(collections).map(collectionSlug => {
                        const collection = collections[collectionSlug];
                        return <Link href={`${DEMO_BASE_URL}/collection/${collectionSlug}`} passHref={true} key={collectionSlug}>
                            <a className="block">
                                <div className="pb-2/3 relative bg-light">
                                    {collection.image &&
                                        <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true}/>}
                                </div>
                                <div className="w-full text-center pt-2 px-4 text-dark">
                                    {collection.title}
                                </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </section>
    </LayoutStore>
}

export function getStaticProps() {
    return {
        props: {
            collections: getStoreCollections(),
            featuredCollections: getStoreFeaturedCollections()
        }
    }
}
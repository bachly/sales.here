import Image from "next/future/image";
import Layout from "../components/Layout";
import { getStoreCollections, getStoreFeaturedCollections } from "../lib/utils";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function HomepageForOnlineStore({ featuredCollections, collections, featuredProducts }) {
    console.log('featuredCollections', featuredCollections)

    return <Layout>
        {featuredCollections && Object.keys(featuredCollections).length > 0 &&
            <section id="hero">
                <div className="max-w-7xl mx-auto py-2">
                    <Splide options={{
                        perPage: 2,
                        arrows: true,
                        gap: "0.5rem",
                        breakpoints: {
                            640: {
                                arrows: true,
                                padding: 0,
                                perPage: 1,
                            },
                        }
                    }}>
                        {Object.keys(featuredCollections).map(collectionSlug => {
                            const collection = featuredCollections[collectionSlug];
                            return <SplideSlide key={collectionSlug}>
                                <Link href={`/collection/${collectionSlug}`} passHref={true} key={collectionSlug}>
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
                    <h2 className="text-primary">Welcome to SalesHere</h2>

                    <p className="mt-6 max-w-lg mx-auto">This is a section to introduce what your store is all about. Briefly explain what products you are selling, your brand signatures and what is so unique about your store.</p>

                    <a className="inline-block bg-primary text-white py-2 px-4 mt-4 hover:bg-secondary transition duration-200">About us</a>
                </div>
            </div>
        </section>

        <section id="features" className="mt-16">
            <div className="max-w-7xl mx-auto">

                <div className="text-center">
                    <h2 className="text-primary">Our Collections</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {Object.keys(collections).map(collectionSlug => {
                        const collection = collections[collectionSlug];
                        return <Link href={`/collection/${collectionSlug}`} passHref={true} key={collectionSlug}>
                            <a className="block">
                                <div className="pb-2/3 relative bg-light">
                                    {collection.image &&
                                        <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />}
                                </div>
                                <div className="flex items-center justify-center relative -top-3">
                                    <div className="text-center py-1 px-6 bg-primary text-white inline-block text-sm lg:text-base">
                                        {collection.title}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </section>
    </Layout>
}

export function getStaticProps() {
    return {
        props: {
            collections: getStoreCollections(),
            featuredCollections: getStoreFeaturedCollections()
        }
    }
}
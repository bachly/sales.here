import Image from "next/future/image";
import FeaturedProducts from "../../components/FeaturedProducts";
import { ExchangeIcon, LockIcon, PhoneIcon, TruckIcon } from "../../components/Icons";
import FashionStoreLayout from "../../components/FashionStoreLayout";
import { getAllCollections } from "../../lib/api";
import Link from "next/link";

const DEMO_BASE_URL = '/fashion-store';

export default function HomepageForOnlineStore({ featuredCollections, collections, featuredProducts }) {
    return <FashionStoreLayout>
        <section id="highlights" className="bg-coffee-light py-2">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2">
                            <PhoneIcon />
                        </span>
                        +61 123 456 789
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">
                            <TruckIcon />
                        </span>Free shipping for $75+ orders</div>
                    <div className="flex items-center">
                        <span className="mr-2">
                            <ExchangeIcon />
                        </span>30-day free return</div>
                    <div className="flex items-center">
                        <span className="mr-2">
                            <LockIcon />
                        </span>Secured payment</div>
                </div>
            </div>
        </section>

        {featuredCollections && featuredCollections.length > 0 &&
            <section id="hero" className="mt-4">
                <div className="max-w-9xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-4">
                        {featuredCollections.map(collection => {
                            return <Link href={`${DEMO_BASE_URL}/collection/${collection.slug}`} passHref={true}>
                                <a>
                                    <div className="pb-2/3 bg-coffee-light relative">
                                        <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                                    </div>
                                </a>
                            </Link>
                        })}
                    </div>
                </div>
            </section>}

        <section id="shop-the-sale" className="mt-8">
            <div className="max-w-9xl mx-auto px-4">

                <div className="text-center">
                    <h2>Shop the sale</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map(collection => {
                        return <Link href={`${DEMO_BASE_URL}/collection/${collection.slug}`} passHref={true} key={collection.title}>
                            <a className="block">
                                <div className="pb-2/3 relative bg-coffee-light">
                                    <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                                </div>
                                <div className="w-full text-center py-2 px-4 text-coffee-dark">
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
    </FashionStoreLayout>
}

export function getStaticProps() {
    const collections = getAllCollections({
        fields: ["title", "image", "handle"]
    });

    const featuredCollections = collections.filter(collection => {
        return [
            "spring-ready-apparel-for-her",
            "personalised-gifts"
        ].indexOf(collection.handle) >= 0
    })

    return {
        props: {
            collections,
            featuredCollections
        }
    }
}
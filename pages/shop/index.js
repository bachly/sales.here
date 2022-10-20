import Image from "next/future/image";
import FeaturedProducts from "../../components/FeaturedProducts";
import { ExchangeIcon, LockIcon, PhoneIcon, TruckIcon } from "../../components/Icons";
import Layout from "../../components/Layout";
import { getAllCollections } from "../../lib/api";

export default function HomepageForOnlineStore({ heroBanners, collections, featuredProducts }) {
    return <Layout>
        <section id="highlights" className="bg-dust-light py-2">
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

        {heroBanners &&
            <section id="hero" className="mt-4">
                <div className="max-w-9xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="pb-2/3 bg-dust-light relative">
                            <Image alt={`Image for ${heroBanners[0].title}`} src={`${heroBanners[0].image}`} fill={true} />
                        </div>
                        <div className="pb-2/3 bg-dust-light relative">
                            <Image alt={`Image for ${heroBanners[1].title}`} src={`${heroBanners[1].image}`} fill={true} />
                        </div>
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
                        return <div key={collection.title} className="pb-2/3 relative">
                            <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                            <div className="flex items-center justify-center -top-6">
                                <div className="bg-dust-dark py-1 px-4 text-dust-light">
                                    {collection.title}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>

        {featuredProducts &&
            <FeaturedProducts title={"Best Sellers This Week"} products={featuredProducts} />
        }
    </Layout>
}

export function getStaticProps() {
    const collections = getAllCollections({
        fields: ["title", "image"]
    });

    return {
        props: {
            collections,
        }
    }
}
import Image from "next/future/image";
import FeaturedProducts from "../components/FeaturedProducts";
import { ExchangeIcon, LockIcon, PhoneIcon, TruckIcon } from "../components/Icons";
import Layout from "../components/Layout";
import { getAllPosts, getAllProducts } from "../lib/api";

export default function Homepage({ heroBanners, featuredProducts, featuredPosts, featuredCollections }) {
    return <Layout>
        <section id="highlights" className="bg-light py-2">
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

        <section id="hero" className="mt-4">
            <div className="max-w-9xl mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="pb-2/3 bg-light relative">
                        <Image alt={`Image for ${heroBanners[0].title}`} src={`${heroBanners[0].image}`} fill={true} />
                    </div>
                    <div className="pb-2/3 bg-light relative">
                        <Image alt={`Image for ${heroBanners[1].title}`} src={`${heroBanners[1].image}`} fill={true} />
                    </div>
                </div>
            </div>
        </section>

        <section id="featured__shop-the-sale" className="mt-8">
            <div className="max-w-9xl mx-auto px-4">

                <div className="text-center">
                    <h2>Shop the sale</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCollections.map(collection => {
                        return <div key={collection.title} className="pb-2/3 relative">
                            <Image alt={`Image for ${collection.title}`} src={`${collection.image}`} fill={true} />
                            <div className="flex items-center justify-center relative -top-6">
                                <div className="bg-dark py-1 px-4 text-light">
                                    {collection.title}
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <FeaturedProducts title={"Best Sellers This Week"} products={featuredProducts} />
            </div>
        </section>
    </Layout>
}

export async function getStaticProps() {
    const products = getAllProducts();
    const posts = getAllPosts();

    const featuredPosts = posts.filter(post => post.isFeatured);

    const featuredProducts = [
        {
            title: "Women Dress Lanola Beige",
            image: "/img/products/women-fashion/women-dress-lanola-beige-0.jpeg"
        },
        {
            title: "Women Alayra Midi Dress Abstract Blue",
            image: "/img/products/women-fashion/women-alayra-midi-dress-abstract-blue-0.jpeg"
        }
    ]

    const featuredCollections = [
        {
            title: "Spring Wardrobe Refresh",
            image: "/img/home-featured/featured-banner-01.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-02.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-03.png"
        },
        {
            title: "Spring Wardrobe Refresh",
            image: "/img/home-featured/featured-banner-04.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-05.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-06.png"
        },
        {
            title: "Spring Wardrobe Refresh",
            image: "/img/home-featured/featured-banner-07.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-08.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-09.png"
        },
        {
            title: "Spring Wardrobe Refresh",
            image: "/img/home-featured/featured-banner-10.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-11.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-12.png"
        }
    ]

    const heroBanners = [
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-02.png"
        },
        {
            title: "New Organic Apparel",
            image: "/img/home-featured/featured-banner-03.png"
        },
    ]

    return {
        props: {
            heroBanners,
            featuredProducts,
            featuredPosts,
            featuredCollections
        }
    }
}
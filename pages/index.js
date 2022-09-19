import BannerSliderWithImage from "../components/BannerSliderWithImage";
import FeaturedArticles from "../components/FeaturedArticles";
import FeaturedProducts from "../components/FeaturedProducts";
import Layout from "../components/Layout";
import { getAllPosts, getAllProducts, getFeaturedProductsFromShopify } from "../lib/api";

export default function Homepage({ featuredProducts, featuredPosts, featuredProductsFromShopify }) {
    console.log('featuredProductsFromShopify', featuredProductsFromShopify);
    return <Layout>
        <BannerSliderWithImage />

        <FeaturedProducts title="Featured Products" products={featuredProductsFromShopify} />

        <FeaturedArticles title="Featured Articles" posts={featuredPosts} />
    </Layout>
}

export async function getStaticProps() {
    const products = getAllProducts();
    const posts = getAllPosts();
    const featuredProducts = products.filter(product =>
        ['CHIL', 'APRI', 'GHER', 'HONE', 'PICK4', 'RAIN', 'MARI', 'OLIV', 'ORAN'].indexOf(product.sku) >= 0)
    const featuredPosts = posts.filter(post => post.isFeatured);

    const featuredProductsFromShopify = await getFeaturedProductsFromShopify();

    return {
        props: {
            featuredProducts,
            featuredPosts,
            featuredProductsFromShopify
        }
    }
}
import { HeaderBanner } from "../components/Banner";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { getAllProducts } from "../lib/api";

export default function ProductsPage({ products }) {
    return <Layout>
        <HeaderBanner title="Products" />

        <Container>
            <div class="grid grid-cols-5">
                {products.map(product => {
                    return <div>
                        <img src={product.img} />
                        <h3>{product.sku}</h3>
                        <h3>{product.title}</h3>
                        <h5>{product.price}</h5>
                    </div>
                })}
            </div>
        </Container>
    </Layout>
}

export function getStaticProps() {
    const products = getAllProducts();

    return {
        props: {
            products,
        }
    }
}
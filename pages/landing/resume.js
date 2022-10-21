import Container from "../../components/Container";
import Layout from "../../components/FashionStoreLayout";
import { getAllPosts } from "../../lib/api";

export default function LandingPage({ products }) {
    return <Layout>
        <Container>

        </Container>
    </Layout>
}

export function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        }
    }
}
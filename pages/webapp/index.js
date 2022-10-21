import { Banner } from "../../components/Banner";
import Container from "../../components/Container";
import Layout from "../../components/FashionStoreLayout";
import { getAllPosts } from "../../lib/api";

export default function BlogPage({ products }) {
    return <Layout>
        <Banner title="Blog" />

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
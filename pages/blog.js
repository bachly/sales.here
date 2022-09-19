import { HeaderBanner } from "../components/Banner";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

export default function BlogPage({ products }) {
    return <Layout>
        <HeaderBanner title="Blog" />

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
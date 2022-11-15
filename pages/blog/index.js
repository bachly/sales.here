import Container from "../../components/Container";
import Layout from "../../components/LayoutStore";
import { getAllPosts } from "../../lib/api";

export default function DashboardPage({ products }) {
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
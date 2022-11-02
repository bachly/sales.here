import { Banner } from "../../components/Banner";
import Container from "../../components/Container";
import { getAllPosts } from "../../lib/api";

export default function BlogPage({ products }) {
    return <>
        <Banner title="Blog" />

        <Container>

        </Container>
    </>
}

export function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        }
    }
}
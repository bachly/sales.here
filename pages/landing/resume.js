import Container from "../../components/Container";
import { getAllPosts } from "../../lib/api";

export default function LandingPage({ products }) {
    return <>
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
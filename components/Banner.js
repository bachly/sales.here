import Container from "./Container";

export function HeaderBanner({ title }) {
    return <section className="bg-gray-50 py-12">
        <Container>
            <h1>{title}</h1>
        </Container>
    </section>
}
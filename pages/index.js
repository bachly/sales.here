import Image from "next/future/image";
import Container from "../components/Container";

export default function Homepage({ }) {
    return <div>
        {/* <section id="hero" className="mt-4">
            <div className="max-w-9xl mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="pb-2/3 bg-dust-light relative">
                        <Image alt={`Image for ${collections[0].title}`} src={`${collections[0].image}`} fill={true} />
                    </div>
                    <div className="pb-2/3 bg-dust-light relative">
                        <Image alt={`Image for ${collections[1].title}`} src={`${collections[1].image}`} fill={true} />
                    </div>
                </div>
            </div>
        </section> */}
        <Container>
            <h1>A handy theme for NextJS websites &amp; applications</h1>
        </Container>

        <section>
            <Container>
                <h2>Stunning layouts for many purposes</h2>
            </Container>
        </section>
    </div>
}

export function getStaticProps() {
    return {
        props: {

        }
    }
}
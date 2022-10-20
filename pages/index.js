import Layout from "../components/Layout"

import HeroBanner1 from "../public/banners/hero1.png"

export default function Homepage({ }) {
    return <Layout>
        <section id="hero" className="mt-4">
            <div className="max-w-9xl mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="pb-2/3 bg-dust-light relative">
                        <Image alt={`Image for ${heroBanners[0].title}`} src={`${heroBanners[0].image}`} fill={true} />
                    </div>
                    <div className="pb-2/3 bg-dust-light relative">
                        <Image alt={`Image for ${heroBanners[1].title}`} src={`${heroBanners[1].image}`} fill={true} />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}
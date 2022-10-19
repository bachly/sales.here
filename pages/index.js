export default function Homepage({ }) {
    return <div className="min-h-screen bg-ocean-dark py-12">
        <h1 className="mt-24 px-24 max-w-8xl">
            <div className="text-ocean-light font-bold text-6xl inline">Handily makes </div>
            <div className="text-ocean-light font-bold text-6xl inline leading-tight text-opacity-50">
                premium &amp; practical themes for Jamstack websites, web apps &amp; Shopify.
            </div>
        </h1>

        <h2 className="mt-20 px-24 text-ocean-light text-opacity-50 font-normal text-xl">Latest UI</h2>

        <div className="mt-4 grid grid-cols-2 gap-12 px-24">
            <div>
                <div className="pb-2/3 bg-ocean-light bg-opacity-5"></div>
                <div className="mt-3 text-ocean-light text-center text-base text-opacity-50 uppercase tracking-wider">Minimal Fashion Store</div>
            </div>
            <div>
                <div className="pb-2/3 bg-ocean-light bg-opacity-5 relative">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <span className="text-ocean-light text-opacity-10 text-4xl font-light">Coming soon</span>
                    </div>
                </div>
                <div className="mt-3 text-ocean-light text-center text-base text-opacity-50 uppercase tracking-wider">Watchlist Web App</div>
            </div>
        </div>

        <h2 className="mt-20 px-24 text-ocean-light text-opacity-50 font-normal text-xl">Latest banners</h2>

        <div className="mt-4 grid grid-cols-3 gap-6 px-24">
            <div className="pb-2/3 bg-ocean-light bg-opacity-5"></div>
            <div className="pb-2/3 bg-ocean-light bg-opacity-5"></div>
            <div className="pb-2/3 bg-ocean-light bg-opacity-5"></div>
        </div>

        <section className="mt-32 px-24 max-w-8xl">
            <h2 className="text-ocean-light text-5xl inline font-bold">Why Handily? </h2>
            <div className="text-ocean-light font-bold text-opacity-50 text-5xl inline leading-tight">
                We want to create themes, brand elements and banners that work together as an eco-system, making it easier and quicker for webmasters to update and improve their websites.
            </div>
        </section>

        <section className="mt-32 px-24 max-w-8xl">
            <h2 className="text-ocean-light text-5xl inline font-bold">Contact. </h2>
            <div className="text-ocean-light font-bold text-opacity-50 text-5xl inline leading-tight">
                Send an email to hi@handily.net
            </div>
        </section>
    </div >
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}
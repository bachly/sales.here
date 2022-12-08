import Image from "next/future/image";
import Link from "next/link";
import Meta from "../components/Meta";

import OnlineStoreHomepage from '../public/img/demos/OnlineStoreHome.png'
import OnlineStoreCollection from '../public/img/demos/OnlineStoreCollection.png'
import OnlineStoreProduct from '../public/img/demos/OnlineStoreProduct.png'
import OnlineStoreMegaMenu from '../public/img/demos/OnlineStoreMegaMenu.png'
import OnlineStoreDropdownMenu from '../public/img/demos/OnlineStoreDropdownMenu.png'

export default function IndexPage({ }) {
    return <div>
        <div id="Index-Page-Layout" className="min-h-screen font-body">
            <Meta />

            <header id="Header">
                <div className="max-w-8xl mx-auto">
                    <div className="relative py-4">
                        <div className="relative z-10 flex items-center justify-center">
                            <Link href="/">
                                <a className="mr-4 flex items-center relative font-black text-3xl" title="Click to go back to Homepage">
                                    Templates by Bach
                                </a>
                            </Link>
                            {/* <div className="ml-6 flex-1 flex items-center">
                                <NavLink href="#demos">Demos</NavLink>
                                <NavLink href="#features">Features</NavLink>
                                <NavLink href="#support">Support</NavLink>
                                <NavLink href="/styleguide">Styleguide</NavLink>
                            </div>
                            <div className="flex items-center">
                                <NavLink href="#purchase">Purchase</NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>

            <section id="HeroSection">
                <div className="pt-48"></div>
                <div className="max-w-8xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-7xl font-black max-w-3xl uppercase">Multi-purpose<br />and Minimal</h1>
                    <p className="mt-4 text-2xl max-w-lg">
                        A simple starting point for any  Web app, Blog and Online Store, <i>Templates by Bach</i> is a collection of Multi-Concept webpage layouts with a clean and modern design.
                    </p>
                    {/* <button className="mt-10 bg-black text-white px-8 py-2 rounded-full text-lg">View demos</button> */}
                </div>
                <div className="pt-64"></div>
            </section>

            <section id="demos" className="bg-black">
                <div className="max-w-5xl mx-auto">
                    {/* <h2 className="text-5xl text-white uppercase font-black text-center">
                        Stunning layouts for <br />
                        starting any project
                    </h2> */}
                    <div className="relative -top-32">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <Link href="/shop" passHref={true}>
                                    <a className="block group">
                                        <Image src={OnlineStoreHomepage} className="" />
                                        <div className="mt-2 text-white uppercase text-xs text-center text-neutral-400">Home page</div>
                                    </a>
                                </Link>
                                <div className="pt-8"></div>
                                <Link href="/shop/product/men-watches_tommy-hilfiger-mens-brown-daniel-watch-model-1710418" passHref={true}>
                                    <a className="block group">
                                        <Image src={OnlineStoreProduct} className="" />
                                        <div className="mt-2 text-white uppercase text-xs text-center text-neutral-400">Product page</div>
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/shop/collection/men-watches" passHref={true}>
                                    <a className="block group">
                                        <Image src={OnlineStoreCollection} className="" />
                                        <div className="mt-2 text-white uppercase text-xs text-center text-neutral-400">Collection page</div>
                                    </a>
                                </Link>
                                <div className="pt-8"></div>
                                <Link href="/shop/product/men-watches_tommy-hilfiger-mens-brown-daniel-watch-model-1710418" passHref={true}>
                                    <a className="block group">
                                        <Image src={OnlineStoreMegaMenu} className="" />
                                        <div className="mt-2 text-white uppercase text-xs text-center text-neutral-400">Megamenu</div>
                                    </a>
                                </Link>
                                <div className="pt-8"></div>
                                <Link href="/shop/product/women-watches_tommy-hilfiger-womens-analogue-sunray-watch#" passHref={true}>
                                    <a className="block group">
                                        <Image src={OnlineStoreDropdownMenu} className="" />
                                        <div className="mt-2 text-white uppercase text-xs text-center text-neutral-400">Dropdown Menu</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="">
                <div className="pt-24"></div>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl uppercase font-black text-center">
                        Features
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-center">
                        The templates come with pre-made dummy but premium layouts for any website &amp; web app.
                        Reusable components can be moved, mixed and matched to create new layouts and a solid foundation for your project.
                    </p>
                </div>
                <div className="pt-12"></div>
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-neutral-100 p-12">
                            <div className="text-3xl mb-4 font-black uppercase">
                                Pure HTML & TailwindCSS.
                            </div>
                            The templates come with pre-made dummy but premium layouts for any website &amp; web app.
                            Reusable components can be moved, mixed and matched to create new layouts and a solid foundation for your project.
                        </div>
                        <div className="bg-neutral-100 p-12">
                            <div className="text-3xl mb-4 font-black uppercase">
                                Sample NextJS and React codes.
                            </div>
                            The code contains few sample of backend integrations such as NextJS calls to get data from headless CMS,
                            animations, interactions, reusable React components.
                        </div>
                        <div className="bg-neutral-100 p-12">
                            <div className="text-3xl mb-4 font-black uppercase">
                                Mobile Optimised.
                            </div>
                            The template works on all screen sizes, from Extra Small to Large Wide Screens.
                        </div>
                        <div className="bg-neutral-100 p-12">
                            <div className="text-3xl mb-4 font-black uppercase">
                                Cleverly Branded.
                            </div>
                            The templates come with pre-selected and pro-selected color palettes.
                            Each palette has only 5 colors. Thanks to clever design,
                            they are enough to create a unique feel to your brand
                            and keep maintainability at the minimum.
                        </div>
                    </div>
                </div>
                <div className="pt-24"></div>
            </section>

            <section id="support" className="bg-black">
                <div className="pt-24"></div>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl text-white uppercase font-black text-center">
                        Support
                    </h2>
                    <p className="mt-4 text-base max-w-xl text-white mx-auto text-center">
                        Send an email to bach@koaladigital.com.au
                    </p>
                </div>
                <div className="pt-24"></div>
            </section>
        </div>
    </div>
}

export function getStaticProps() {
    return {
        props: {

        }
    }
}

function NavLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-8 leading-none flex items-center text-opacity-70 hover:text-opacity-100 transition duration-200">
            {children}
        </a>
    </Link>
}
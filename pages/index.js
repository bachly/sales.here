import Image from "next/future/image";
import Link from "next/link";
import Meta from "../components/Meta";

import DemoScreenshotFashionSales from '../public/img/demos/Handily Demo - Fashion Sales.png'

export default function IndexPage({ }) {
    return <div>
        <div id="Index-Page-Layout" className="min-h-screen font-body">
            <Meta />

            <header id="Header">
                <div className="max-w-8xl mx-auto">
                    <div className="relative py-4">
                        <div className="relative z-10 flex items-center">
                            <Link href="/">
                                <a className="mr-4 flex items-center relative font-black text-3xl" title="Click to go back to Homepage">
                                    HANDILY
                                </a>
                            </Link>
                            <div className="ml-6 flex-1 flex items-center">
                                <NavLink href="#demos">Demos</NavLink>
                                <NavLink href="#features">Features</NavLink>
                                <NavLink href="#support">Support</NavLink>
                                <NavLink href="/styleguide">Styleguide</NavLink>
                            </div>
                            <div className="flex items-center">
                                <NavLink href="#purchase">Purchase</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="HeroSection">
                <div className="pt-48"></div>
                <div className="max-w-8xl mx-auto">
                    <h1 className="text-7xl font-black max-w-3xl uppercase">Multipurpose NextJS Theme</h1>
                    <p className="mt-4 text-2xl max-w-lg">
                        A smart solution for any NextJS starters. <i>Handily</i> is a unique Multi-Concept NextJS Theme with a clean and modern design.
                    </p>
                    <button className="mt-10 bg-black text-white px-8 py-2 rounded-full text-lg">View demos</button>
                </div>
                <div className="pt-48"></div>
            </section>

            <section id="demos" className="bg-black">
                <div className="pt-24"></div>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl text-white uppercase font-black text-center">
                        Stunning layouts for <br />
                        starting any project
                    </h2>
                    <p className="mt-4 text-base max-w-xl text-white mx-auto text-center">
                        Handily comes with pre-made dummy but premium layouts for any website &amp; web app.
                        Reusable components can be moved, mixed and matched to create new layouts and a solid foundation for your project.
                    </p>
                    <div className="mt-12">
                        <div className="grid grid-cols-4 gap-12">
                            <Link href="/fashion-store" passHref={true}>
                                <a className="block group">
                                    <div className="pb-3/2 relative overflow-hidden group-hover:-translate-y-3 transform duration-300">
                                        <Image src={DemoScreenshotFashionSales} className="absolute top-0 left-0 w-full" />
                                    </div>
                                    <div className="mt-4 text-white uppercase text-sm text-center">Fashion Store</div>
                                </a>
                            </Link>
                            <div>
                                <div className="h-96 w-full bg-neutral-800"></div>
                                <div className="mt-2 text-white uppercase text-sm text-center">Lifestyle Blog</div>
                            </div>
                            <div>
                                <div className="h-96 w-full bg-neutral-800"></div>
                                <div className="mt-2 text-white uppercase text-sm text-center">Travel Agency</div>
                            </div>
                            <div>
                                <div className="h-96 w-full bg-neutral-800"></div>
                                <div className="mt-2 text-white uppercase text-sm text-center">Movies Search</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-24"></div>
            </section>

            <section id="Highlight1" className="bg-neutral-100">
                <div className="pt-48"></div>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl uppercase font-black">
                        Unique branding<br />
                        with only 5 colors
                    </h2>
                    <p className="mt-8 text-base max-w-xl font-bold">
                        Handily comes with pre-selected and pro-selected color palettes.
                        Each palette has only 5 colors. Thanks to clever design,
                        they are enough to create a unique feel to your brand
                        and keep maintainability at the minimum.
                    </p>
                </div>
                <div className="pt-48"></div>
            </section>

            <section id="Highlight2" className="bg-white">
                <div className="pt-24"></div>
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-neutral-100 p-12">
                            <div className="text-3xl font-black uppercase">
                                Simple to Complex Components.
                            </div>
                        </div>
                        <div className="">
                            <div className="pb-1/3 bg-neutral-100 p-12">
                                <div className="text-3xl font-black uppercase">
                                    Sample Backend Integration.
                                </div>
                            </div>
                            <div className="mt-8 pb-1/3 bg-neutral-100 p-12">
                                <div className="text-3xl font-black uppercase">
                                    Mobile Optimised.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-24"></div>
            </section>

            <section id="Breakdown" className="bg-black">
                <div className="pt-24"></div>
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl text-white uppercase font-black text-center">
                        Get Handily
                    </h2>
                    <p className="mt-4 text-base max-w-xl text-white mx-auto text-center">
                        Handily is coming out by the end of 2022.
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
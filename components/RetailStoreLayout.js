import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon, TruckIcon, ExchangeIcon, LockIcon } from "./Icons";
import Logo from "../public/logo.svg";

const DEMO_BASE_URL = '/retail';

export default function Layout({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen font-body">
            <Meta />

            <header id="Header">
                <div className="bg-coffee-primary text-coffee-light py-1 text-center text-sm uppercase">
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </div>
                <Container>
                    <div className="relative py-4">
                        <div className="relative z-10 flex items-center">
                            <Link href={`${DEMO_BASE_URL}`}>
                                <a className="w-24 flex items-center relative" style={{ top: '3px' }}>
                                    <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                </a>
                            </Link>
                            <div className="ml-6 flex-1 flex items-center">
                                <NavLink href={`${DEMO_BASE_URL}`}>Men</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>Women</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>Home</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>Beauty</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>Kids</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>Furniture</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>BRANDS</NavLink>
                                <NavLink href={`${DEMO_BASE_URL}`}>
                                    <span className="text-coffee-danger">CLEARANCE</span>
                                </NavLink>
                            </div>
                            <div className="flex itens-center">
                                <NavIconLink href="/styleguide">
                                    <SearchIcon />
                                </NavIconLink>
                                <NavIconLink href="/styleguide">
                                    <UserIcon />
                                </NavIconLink>
                                <NavIconLink href="/styleguide">
                                    <CartIcon />
                                </NavIconLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            {children}

            <section id="seoBlob" className="mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-2 text-xs gap-12 text-coffee-dark text-opacity-50 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nisi facilisis, auctor velit eget, commodo ante. Nunc eu consectetur purus. Sed tincidunt ullamcorper erat vitae bibendum. Proin vel neque non ante rutrum dapibus et eget urna. Nulla ultrices commodo interdum. Duis malesuada bibendum nibh, ac lacinia felis posuere nec. Nam ullamcorper porttitor ullamcorper. Nullam luctus ipsum tellus, id volutpat diam feugiat eu. Donec ultricies ante at justo rutrum, a pretium eros ultrices. Phasellus nisi ex, ullamcorper nec vulputate vel, porttitor tempus libero. Sed ac nulla a nunc congue mollis. Cras commodo mattis ornare. Integer vel fermentum turpis, in ornare justo.

                        Phasellus purus dui, pharetra a suscipit non, elementum nec turpis. Proin tincidunt pulvinar dui, vitae blandit sapien gravida eu. Curabitur placerat finibus varius. Quisque accumsan semper quam ut vehicula. Suspendisse ut posuere turpis. Nulla dapibus libero lectus, sit amet malesuada lacus rhoncus eu. Ut nisi nisl, tempor a mi vel, malesuada ullamcorper justo. Nam blandit eu lacus non lobortis. Morbi id nisi vitae ex interdum tincidunt a eget diam. Praesent vitae aliquet diam. Curabitur quis metus interdum, volutpat dui a, posuere velit. Phasellus aliquet, felis nec fringilla porta, velit turpis convallis lectus, quis aliquam nisi arcu ut nulla. Pellentesque a pharetra est.
                    </div>
                </div>
            </section>

            <section id="subscription" className="mt-12 py-8 bg-coffee-secondary">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl flex-1">Subscribe to new things</h2>
                        <div className="flex items-center justify-end flex-1">
                            <input placeholder="Your email address" className="w-1/2 py-3 px-6 rounded-md bg-white bg-opacity-10 placeholder-coffee-light placeholder-opacity-50" />
                            <button className="py-3 px-6 bg-white rounded-md ml-2">Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="Footer" className="py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex">
                        <div className="w-1/3">
                            <div className="h-full flex flex-col">
                                <div className="flex-1">
                                    <Link href={`${DEMO_BASE_URL}`}>
                                        <a className="w-24 flex items-center relative text-white fill-current" style={{ top: '3px' }}>
                                            <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                        </a>
                                    </Link>
                                    <div className="text-sm">Life made easy.</div>
                                </div>
                                <div className="text-xs">
                                    An online store by Handily Pty Ltd. ABN: 123567890
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="grid grid-cols-3 items-start">
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">About</div>
                                    <a href="#" className="block py-1">About us</a>
                                    <a href="#" className="block py-1">Contact us</a>
                                    <a href="#" className="block py-1">Terms & Conditions</a>
                                    <a href="#" className="block py-1">Shipping & Delivery</a>
                                    <a href="#" className="block py-1">Return Policy</a>
                                </div>
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">Collections</div>
                                    <a href="#" className="block py-1">Men Apparel</a>
                                    <a href="#" className="block py-1">Women Apparel</a>
                                    <a href="#" className="block py-1">Kids Clothing</a>
                                    <a href="#" className="block py-1">Furniture</a>
                                    <a href="#" className="block py-1">Clearance</a>
                                </div>
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">Brands</div>
                                    <a href="#" className="block py-1">Clothing Brands</a>
                                    <a href="#" className="block py-1">Accessory Brands</a>
                                    <a href="#" className="block py-1">Furniture Brands</a>
                                    <a href="#" className="block py-1">Children Brands</a>
                                    <a href="#" className="block py-1">Generic Brands</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function NavLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-8 leading-none flex items-center text-opacity-70 hover:text-opacity-100 transition duration-200">
            {children}
        </a>
    </Link>
}

function NavIconLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-4 leading-none tracking-wide text-sm flex items-center text-opacity-70 hover:text-opacity-100 transition duration-200">
            {children}
        </a>
    </Link>
}
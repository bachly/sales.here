import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon, TruckIcon, ExchangeIcon, LockIcon, MenuIcon } from "./Icons";
import Logo from "../public/logo.svg";
import Announcement from "./Announcement";

const DEMO_BASE_URL = '/store';

export default function LayoutStore({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen font-body bg-light bg-opacity-5">
            <Meta />

            <header id="Header" className="bg-light bg-opacity-5 relative z-10">
                <Announcement>
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </Announcement>
                <Container>
                    <div className="pt-6 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="w-64">
                                <div className="flex itens-center">
                                    <NavIconLink href="#">
                                        <MenuIcon />
                                    </NavIconLink>
                                    <NavIconLink href="#">
                                        <SearchIcon />
                                    </NavIconLink>
                                </div>
                            </div>

                            <Link href={`${DEMO_BASE_URL}`}>
                                <a className="w-24 flex items-center relative" style={{ top: '3px' }}>
                                    <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                </a>
                            </Link>
                            <div className="w-64">
                                <div className="flex itens-center justify-end">
                                    <NavIconLink href="#">
                                        <UserIcon />
                                    </NavIconLink>
                                    <NavIconLink href="#">
                                        <CartIcon />
                                    </NavIconLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="mt-4 flex-1 flex items-center justify-center pb-3">
                    <NavLink href={`${DEMO_BASE_URL}`}>
                        Men
                        {/* <div className="absolute bg-white top-full left-0 w-full py-2 shadow-xl border border-dark border-opacity-10">
                                        <div className="max-w-7xl mx-auto px-4">
                                            <div className="font-bold py-2 mx-4 border-b border-gray-100 mb-2">Men</div>
                                            <NavLink2 href="#">Clothing</NavLink2>
                                            <NavLink2 href="#">Footwear</NavLink2>
                                            <NavLink2 href="#">Accessories</NavLink2>
                                        </div>
                                    </div> */}
                    </NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>Women</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>Home</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>Beauty</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>Kids</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>Furniture</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>BRANDS</NavLink>
                    <NavLink href={`${DEMO_BASE_URL}`}>
                        <span className="text-danger">CLEARANCE</span>
                    </NavLink>
                </div>
            </header>

            {children}

            <section id="seoBlob" className="mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="columns-2 text-xs gap-12 text-dark text-opacity-50 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nisi facilisis, auctor velit eget, commodo ante. Nunc eu consectetur purus. Sed tincidunt ullamcorper erat vitae bibendum. Proin vel neque non ante rutrum dapibus et eget urna. Nulla ultrices commodo interdum. Duis malesuada bibendum nibh, ac lacinia felis posuere nec. Nam ullamcorper porttitor ullamcorper. Nullam luctus ipsum tellus, id volutpat diam feugiat eu. Donec ultricies ante at justo rutrum, a pretium eros ultrices. Phasellus nisi ex, ullamcorper nec vulputate vel, porttitor tempus libero. Sed ac nulla a nunc congue mollis. Cras commodo mattis ornare. Integer vel fermentum turpis, in ornare justo.

                        Phasellus purus dui, pharetra a suscipit non, elementum nec turpis. Proin tincidunt pulvinar dui, vitae blandit sapien gravida eu. Curabitur placerat finibus varius. Quisque accumsan semper quam ut vehicula. Suspendisse ut posuere turpis. Nulla dapibus libero lectus, sit amet malesuada lacus rhoncus eu. Ut nisi nisl, tempor a mi vel, malesuada ullamcorper justo. Nam blandit eu lacus non lobortis. Morbi id nisi vitae ex interdum tincidunt a eget diam. Praesent vitae aliquet diam. Curabitur quis metus interdum, volutpat dui a, posuere velit. Phasellus aliquet, felis nec fringilla porta, velit turpis convallis lectus, quis aliquam nisi arcu ut nulla. Pellentesque a pharetra est.
                    </div>
                </div>
            </section>

            <section id="subscription" className="mt-12 py-8 bg-primary">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl flex-1">Subscribe to new things</h2>
                        <div className="flex items-center justify-end flex-1">
                            <input placeholder="Your email address" className="w-1/2 py-3 px-6 rounded-md bg-white bg-opacity-10 placeholder-light placeholder-opacity-50" />
                            <button className="py-3 px-6 bg-white rounded-md ml-2">Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="Footer" className="py-16">
                <div className="max-w-7xl mx-auto px-4">
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

function NavLink({ href = "#", children }) {
    return <Link href={href}>
        <a className="ml-8 leading-none flex items-center transition duration-200">
            {children}
        </a>
    </Link>
}


function NavLink2({ href = "#", children }) {
    return <Link href={href}>
        <a className="py-1 px-4 leading-none flex items-center transition duration-200 hover:text-primary relative text-sm">
            {children}
        </a>
    </Link>
}

function NavIconLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-4 leading-none tracking-wide text-sm flex items-center transition duration-200">
            {children}
        </a>
    </Link>
}
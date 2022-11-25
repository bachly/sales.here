import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon } from "./Icons";
import Announcement from "./Announcement";

const DEMO_BASE_URL = '/shop';
const SHOP_NAME = 'Fauget';

const MENU = {
    dropdown: {
        "links": [
            {
                "label": "Mens Watches",
                "url": "#"
            },
            {
                "label": "Women Watches",
                "url": "#"
            },
            {
                "label": "On Sales",
                "url": "#"
            }
        ]
    },
    layouts: {
        "links": [
            {
                "label": "Center",
                "url": "#"
            },
            {
                "label": "Left Aligned",
                "url": "#"
            },
            {
                "label": "Luxury",
                "url": "#"
            },
            {
                "label": "Mega",
                "url": "#"
            },
            {
                "label": "Dashboard",
                "url": "#"
            }
        ]
    },
    "brands": {
        "links": [
            {
                "label": "Hugo Boss",
                "url": "#"
            },
            {
                "label": "Tommy Hilfiger",
                "url": "#"
            },
            {
                "label": "Lacoste",
                "url": "#"
            },
            {
                "label": "Guess",
                "url": "#"
            },
        ]
    },
    "publicPages": {
        "links": [
            {
                "label": "Homepage",
                "url": `${DEMO_BASE_URL}`
            },
            {
                "label": "Collection Page",
                "url": `${DEMO_BASE_URL}/collection/personalised-gifts`
            },
            {
                "label": "Product Page",
                "url": "#"
            },
            {
                "label": "Blog Page",
                "url": "#"
            },
            {
                "label": "Article Page",
                "url": "#"
            },
            {
                "label": "Login Page",
                "url": "#"
            },
            {
                "label": "Register Page",
                "url": "#"
            },
            {
                "label": "Cart Page",
                "url": "#"
            },
            {
                "label": "Terms & Conditions",
                "url": "#"
            }
        ]
    },
    "privatePages": {
        "links": [
            {
                "label": "Account Page",
                "url": "#"
            },
            {
                "label": "Order Page",
                "url": "#"
            },
        ]
    }
}

export default function LayoutStore({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen font-body bg-body">
            <Meta />

            <header id="Header" className="bg-body relative z-10">
                <Announcement>
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </Announcement>
                <Container>
                    <div className="py-6">
                        <div className="flex items-center justify-between">
                            <div className="w-64">
                                <div className="flex itens-center">
                                    <NavIconLink href="#">
                                        <PhoneIcon />
                                    </NavIconLink>
                                    <NavIconLink href="#">
                                        <SearchIcon />
                                    </NavIconLink>
                                </div>
                            </div>

                            <Link href={`${DEMO_BASE_URL}`}>
                                <a className="flex items-center relative">
                                    <img src='/logos/watch-store-logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
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
                <div className="mb-4 flex-1">
                    <div className="relative">
                        <div className="flex items-center justify-center">
                            <nav className="megamenu">
                                <span className="megamenu__label">Megamenu</span>
                                <div className="megamenu__content">
                                    <div className="px-4 font-bold pb-2 border-b border-gray-200">Megamenu</div>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start">
                                            <div className="w-40 py-3">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Collections</div>
                                                {MENU.dropdown.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                            <div className="w-40 py-3">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Public Pages</div>
                                                {MENU.publicPages.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                            <div className="w-40 py-3">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Private Pages</div>
                                                {MENU.privatePages.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                        </div>
                                        <div className="w-40 bg-gray-100 py-3">
                                            <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">BRANDS</div>
                                            {MENU.brands.links.map(link => {
                                                return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <nav className="menu">
                                <span className="menu__label">Dropdown</span>
                                <div className="menu__content">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start">
                                            <div className="w-40">
                                                {MENU.dropdown.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <nav className="menu">
                                <span className="menu__label">Header Layouts</span>
                                <div className="menu__content">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start">
                                            <div>
                                                {MENU.layouts.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="w-48 block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </nav>
                            <nav className="menu">
                                <Link href={`/styleguide`}>
                                    <a className="menu__label">STYLEGUIDE</a>
                                </Link>
                            </nav>
                            <nav className="menu">
                                <Link href={`/banners`}>
                                    <a className="menu__label">
                                        <span className="text-danger">BANNERS</span>
                                    </a>
                                </Link>
                            </nav>
                        </div>
                    </div>
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
                <div className="max-w-8xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="w-2/5">
                            <div className="h-full flex flex-col">
                                <div className="">
                                    <Link href={`${DEMO_BASE_URL}`}>
                                        <a className="block flex items-center justify-center relative text-white fill-current">
                                            <img src='/logos/watch-store-logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                        </a>
                                    </Link>
                                </div>
                                <div className="mt-4 text-xs text-center">
                                    An online store by {SHOP_NAME} Pty Ltd. ABN: 123567890
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <div className="grid grid-cols-3 items-start">
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">Catalog</div>
                                    <a href="#" className="block py-1">Men Watches</a>
                                    <a href="#" className="block py-1">Women Watches</a>
                                    <a href="#" className="block py-1">Kid Watches</a>
                                    <a href="#" className="block py-1">Anniversary Watches</a>
                                    <a href="#" className="block py-1">Luxurious Watches</a>
                                </div>
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">Brands</div>
                                    <a href="#" className="block py-1">Hugo Boss Watches</a>
                                    <a href="#" className="block py-1">Tommy Hilfiger Watches</a>
                                    <a href="#" className="block py-1">Lacoste Watches</a>
                                    <a href="#" className="block py-1">Guess Watches</a>
                                    <a href="#" className="block py-1">Michael Kor Watches</a>
                                </div>
                                <div>
                                    <div className="uppercase text-sm mb-2 font-bold">Information</div>
                                    <a href="#" className="block py-1">About us</a>
                                    <a href="#" className="block py-1">Shipping & Delivery</a>
                                    <a href="#" className="block py-1">Terms & Conditions</a>
                                    <a href="#" className="block py-1">Refund Policy</a>
                                    <a href="#" className="block py-1">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function NavIconLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-4 leading-none tracking-wide text-sm flex items-center transition duration-200">
            {children}
        </a>
    </Link>
}
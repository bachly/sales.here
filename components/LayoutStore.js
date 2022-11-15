import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon } from "./Icons";
import Announcement from "./Announcement";

const DEMO_BASE_URL = '/store';

const MENU = {
    clothing: {
        "links": [
            {
                "label": "Shirts",
                "url": "#"
            },
            {
                "label": "T-shirts",
                "url": "#"
            },
            {
                "label": "Pants",
                "url": "#"
            },
            {
                "label": "Shorts",
                "url": "#"
            },
            {
                "label": "Underwear",
                "url": "#"
            },
            {
                "label": "Outerwear",
                "url": "#"
            },
            {
                "label": "Socks",
                "url": "#"
            },
            {
                "label": "Swimwear",
                "url": "#"
            },
            {
                "label": "Activewear",
                "url": "#"
            },
            {
                "label": "Sleepwear",
                "url": "#"
            },
            {
                "label": "Suits",
                "url": "#"
            }
        ]
    },
    "footwear": {
        "links": [
            {
                "label": "Sneakers",
                "url": "#"
            },
            {
                "label": "Trainers",
                "url": "#"
            },
            {
                "label": "Sandals",
                "url": "#"
            },
            {
                "label": "Boots",
                "url": "#"
            },
            {
                "label": "Thongs",
                "url": "#"
            },
            {
                "label": "Formal Shoes",
                "url": "#"
            },
            {
                "label": "Ugg Boots",
                "url": "#"
            }
        ]
    },
    "accessories": {
        "links": [
            {
                "label": "Watches",
                "url": "#"
            },
            {
                "label": "Bags",
                "url": "#"
            },
            {
                "label": "Hats",
                "url": "#"
            },
            {
                "label": "Sunglasses",
                "url": "#"
            },
            {
                "label": "Wallets",
                "url": "#"
            },
            {
                "label": "Belts",
                "url": "#"
            },
            {
                "label": "Toes",
                "url": "#"
            },
            {
                "label": "Cufflinks",
                "url": "#"
            },
            {
                "label": "Keyholders",
                "url": "#"
            },
            {
                "label": "Techcases",
                "url": "#"
            },
            {
                "label": "Optical Glasses",
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
                <div className="mb-2 flex-1">
                    <div className="relative">
                        <div className="flex items-center justify-center">
                            <nav className="megamenu">
                                <span className="megamenu__label">Megamenu</span>
                                <div className="megamenu__content">
                                    <div className="px-4 font-bold pb-2 border-b border-gray-200 mb-3">Megamenu</div>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start">
                                            <div className="w-40">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Clothing</div>
                                                {MENU.clothing.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                            <div className="w-40">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Footwear</div>
                                                {MENU.footwear.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                            <div className="w-40">
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Accessories</div>
                                                {MENU.accessories.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="text-xs font-bold px-4 pb-2 uppercase">BRANDS</div>
                                            {MENU.accessories.links.map(link => {
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
                                                {MENU.clothing.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <nav className="menu">
                                <span className="menu__label">Page Layouts</span>
                                <div className="menu__content">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start">
                                            <div>
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Public pages</div>
                                                {MENU.publicPages.links.map(link => {
                                                    return <Link key={link.label} href={link.url}><a className="w-48 block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                })}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-gray-500">Private pages</div>
                                                {MENU.privatePages.links.map(link => {
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

function NavIconLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-4 leading-none tracking-wide text-sm flex items-center transition duration-200">
            {children}
        </a>
    </Link>
}
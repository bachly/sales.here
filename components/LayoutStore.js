import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon, MenuIcon } from "./Icons";
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
        <div id="Layout" className="min-h-screen font-body bg-neutral-100">
            <Meta />

            <header id="Header" className="relative z-10">
                <Announcement>
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </Announcement>

                {/* Desktop menu */}
                <div className="hidden lg:block bg-neutral-100 border-b border-neutral-200">
                    <Container>
                        <div className="py-4">
                            <div className="flex items-center justify-between">
                                <div style={{ width: '300px' }}>
                                    <Link href={`${DEMO_BASE_URL}`}>
                                        <a className="flex items-center relative">
                                            <img src='/logos/watch-store-logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} style={{ width: '200px' }} />
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex-1">
                                    <div className="max-w-7xl mx-auto px-4 relative">
                                        <div className="flex items-center justify-start">
                                            <nav className="megamenu">
                                                <span className="megamenu__label">Megamenu</span>
                                                <div className="megamenu__content">
                                                    <div className="px-4 font-bold pb-2 border-b border-neutral-200">Megamenu</div>
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-start">
                                                            <div className="w-40 py-3">
                                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-neutral-400">Collections</div>
                                                                {MENU.dropdown.links.map(link => {
                                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                                })}
                                                            </div>
                                                            <div className="w-40 py-3">
                                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-neutral-400">Public Pages</div>
                                                                {MENU.publicPages.links.map(link => {
                                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                                })}
                                                            </div>
                                                            <div className="w-40 py-3">
                                                                <div className="text-xs font-bold px-4 pb-2 uppercase text-neutral-400">Private Pages</div>
                                                                {MENU.privatePages.links.map(link => {
                                                                    return <Link key={link.label} href={link.url}><a className="block px-4 pb-1 hover:underline text-sm">{link.label}</a></Link>
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="w-40 bg-neutral-100 py-3">
                                                            <div className="text-xs font-bold px-4 pb-2 uppercase text-neutral-400">BRANDS</div>
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

                                <div className="w-64">
                                    <div className="flex itens-center justify-end">
                                        <NavIconLink href="#">
                                            <PhoneIcon />
                                        </NavIconLink>
                                        <NavIconLink href="#">
                                            <SearchIcon />
                                        </NavIconLink>
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
                </div>

                {/* Mobile menu */}
                <div id="mobile-menu" class="block lg:hidden bg-neutral-100 border-b border-neutral-200">
                    <div id="mobile-menu__topbar">
                        <div class="py-2 flex flex-row items-center">

                            <div id="mobile-menu__hamburger" class="w-12">
                                <button target="-1" class="w-10 h-10 px-2 focus:outline-none focus:ring focus:border-primary flex items-center justify-center">
                                    <span class="w-full fill-current text-black">
                                        <MenuIcon />
                                    </span>
                                </button>
                            </div>

                            <div id="mobile-menu__logo" class="flex-1">
                                <Link href={`${DEMO_BASE_URL}`}>
                                    <a className="block flex items-center justify-center relative focus:outline-none focus:ring focus:border-primary">
                                        <img src='/logos/watch-store-logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} style={{ width: "150px" }} />
                                    </a>
                                </Link>
                            </div>

                            <div id="mobile-menu__users" class="w-12">
                                <div class="flex flex-center items-center justify-end">
                                    <div class="ml-6">
                                        <div class="flex flex-row items-center">
                                            <a href="/cart" class="relative w-10 h-10 px-2 focus:outline-none focus:ring focus:border-primary flex items-center justify-center">
                                                <span class="w-full">
                                                    <CartIcon />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobile-menu__flyin">
                        {/* <div style="max-width: 350px;" class="fixed top-0 left-0 h-full w-full overflow-y-scroll overflow-x-hidden z-50">
                            <button tabindex="0" style="left: 80%;" class="fixed top-0 w-12 h-12 py-2 px-2 bg-black focus:outline-nonefocus:ring focus:border-primary-300 flex items-center justify-center z-50">
                                <span class="w-full" style="fill:white"><svg id="lnr-cross" viewBox="0 0 1024 1024">
                                    <title>cross</title>
                                    <path class="path1" d="M548.203 537.6l289.099-289.098c9.998-9.998 9.998-26.206 0-36.205-9.997-9.997-26.206-9.997-36.203 0l-289.099 289.099-289.098-289.099c-9.998-9.997-26.206-9.997-36.205 0-9.997 9.998-9.997 26.206 0 36.205l289.099 289.098-289.099 289.099c-9.997 9.997-9.997 26.206 0 36.203 5 4.998 11.55 7.498 18.102 7.498s13.102-2.499 18.102-7.499l289.098-289.098 289.099 289.099c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499c9.998-9.997 9.998-26.206 0-36.203l-289.098-289.098z">
                                    </path>
                                </svg></span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </header >

            {children}

            < section id="seo-block" className="mt-6 lg:mt-20" >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="columns1 lg:columns-2 text-xs gap-12 text-dark text-opacity-50 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nisi facilisis, auctor velit eget, commodo ante. Nunc eu consectetur purus. Sed tincidunt ullamcorper erat vitae bibendum. Proin vel neque non ante rutrum dapibus et eget urna. Nulla ultrices commodo interdum. Duis malesuada bibendum nibh, ac lacinia felis posuere nec. Nam ullamcorper porttitor ullamcorper. Nullam luctus ipsum tellus, id volutpat diam feugiat eu. Donec ultricies ante at justo rutrum, a pretium eros ultrices. Phasellus nisi ex, ullamcorper nec vulputate vel, porttitor tempus libero. Sed ac nulla a nunc congue mollis. Cras commodo mattis ornare. Integer vel fermentum turpis, in ornare justo.

                        Phasellus purus dui, pharetra a suscipit non, elementum nec turpis. Proin tincidunt pulvinar dui, vitae blandit sapien gravida eu. Curabitur placerat finibus varius. Quisque accumsan semper quam ut vehicula. Suspendisse ut posuere turpis. Nulla dapibus libero lectus, sit amet malesuada lacus rhoncus eu. Ut nisi nisl, tempor a mi vel, malesuada ullamcorper justo. Nam blandit eu lacus non lobortis. Morbi id nisi vitae ex interdum tincidunt a eget diam. Praesent vitae aliquet diam. Curabitur quis metus interdum, volutpat dui a, posuere velit. Phasellus aliquet, felis nec fringilla porta, velit turpis convallis lectus, quis aliquam nisi arcu ut nulla. Pellentesque a pharetra est.
                    </div>
                </div>
            </section >

            <section id="subscription" className="mt-12 py-8 bg-primary">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <h2 className="w-full lg:w-auto text-white text-lg lg:text-2xl text-center lg:text-left">Subscribe to new things</h2>
                        <div className="w-full lg:flex-1 lg:w-auto mt-3 lg:mt-0">
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                                <input placeholder="Your email address" className="w-full lg:w-2/5 py-3 px-6 bg-white bg-opacity-10 placeholder-white placeholder-opacity-30 text-center lg:text-left" />
                                <button className="w-full lg:w-auto mt-2 lg:mt-0 py-3 px-6 bg-neutral-800 hover:bg-neutral-700 text-white lg:ml-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="Footer" className="py-4 lg:py-16">
                <div className="max-w-8xl mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full lg:w-2/5">
                            <div className="h-full flex flex-col items-center">
                                <div style={{ width: '300px' }}>
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
                        <div className="w-full lg:w-3/5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
                                <div className="pt-6 lg:pt-0">
                                    <div className="uppercase text-xs mb-2 tracking-widest font-bold text-neutral-400">Catalog</div>
                                    <a href="#" className="block py-1">Men Watches</a>
                                    <a href="#" className="block py-1">Women Watches</a>
                                    <a href="#" className="block py-1">Kid Watches</a>
                                    <a href="#" className="block py-1">Anniversary Watches</a>
                                    <a href="#" className="block py-1">Luxurious Watches</a>
                                </div>
                                <div className="pt-6 lg:pt-0">
                                    <div className="uppercase text-xs mb-2 tracking-widest font-bold text-neutral-400">Brands</div>
                                    <a href="#" className="block py-1">Hugo Boss Watches</a>
                                    <a href="#" className="block py-1">Tommy Hilfiger Watches</a>
                                    <a href="#" className="block py-1">Lacoste Watches</a>
                                    <a href="#" className="block py-1">Guess Watches</a>
                                    <a href="#" className="block py-1">Michael Kor Watches</a>
                                </div>
                                <div className="pt-6 lg:pt-0">
                                    <div className="uppercase text-xs mb-2 tracking-widest font-bold text-neutral-400">Information</div>
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
        </div >
    )
}

function NavIconLink({ href, children }) {
    return <Link href={href}>
        <a className="ml-4 leading-none tracking-wide text-sm flex items-center transition duration-200">
            {children}
        </a>
    </Link>
}
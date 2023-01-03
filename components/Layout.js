import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon, MenuIcon, PinIcon, ChevronRight, ChevronRightSmall, CrossIcon } from "./Icons";
import Announcement from "./Announcement";
import { useReducer, useState } from "react";
import clsx from "clsx";

const MENU = {
    dropdown: {
        "links": [
            {
                "label": "Mens Watches",
                "url": "/collection/men-watches"
            },
            {
                "label": "Women Watches",
                "url": "/collection/women-watches"
            },
            {
                "label": "On Sales",
                "url": "/collection/watches-on-sales"
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
                "url": "/collection/hugo-boss-watches"
            },
            {
                "label": "Tommy Hilfiger",
                "url": "/collection/tommy-hilfiger-watches"
            },
            {
                "label": "Lacoste",
                "url": "/collection/lacoste-watches"
            },
            {
                "label": "Guess",
                "url": "/collection/guess-watches"
            },
        ]
    },
    "publicPages": {
        "links": [
            {
                "label": "Homepage",
                "url": `/`
            },
            {
                "label": "Collection Page",
                "url": `/collection/men-watches`
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

export default function Layout({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;

    const [state, setState] = useState({
        isMobileMenuOpened: false
    })

    function openMobileNav(name) {
        return (event) => {
            event && event.preventDefault();
        }
    }

    function toggleMobileMenu() {
        return (event) => {
            event && event.preventDefault();
            setState({
                ...state,
                isMobileMenuOpened: !state.isMobileMenuOpened
            })
        }
    }

    return (
        <div id="Layout" className={clsx("font-body bg-neutral-100", state.isMobileMenuOpened ? "h-screen overflow-hidden" : "min-h-screen")}>
            <Meta />

            <header id="Header" className="relative z-10 ">
                <Announcement>
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </Announcement>

                {/* Desktop menu */}
                <div className="hidden lg:block bg-neutral-100 border-b border-neutral-200">
                    <Container>
                        <div className="">
                            <div className="pt-4 flex items-center justify-between">
                                <div style={{ width: '300px' }}>
                                    <Link href={`/`}>
                                        <a className="flex items-center relative">
                                            <img src='/img/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} style={{ width: '200px' }} />
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full relative pr-2" style={{ minWidth: '400px' }}>
                                            <form className="relative" action="/search">
                                                <input id="GlobalSearch" type="text" placeholder="Search" name="q" data-live-search-input=""
                                                    className="relative z-30 text-base bg-neutral-200 text-white placeholder-neutral-500 py-2 pr-10 pl-4 w-full focus:outline-none focus:ring focus:border-primary-300" />
                                                <button className="absolute right-4 top-0 z-30" type="submit">
                                                    <span className="block w-6 py-2 fill-current text-neutral-600">
                                                        <SearchIcon />
                                                    </span>
                                                </button>
                                                <div id="GloablSearchResult" className="absolute w-full top-full left-0 z-30"></div>
                                            </form>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-full flex items-center flex-no-wrap justify-end">
                                                <div className="py-2 px-4 flex flex-row items-center">
                                                    <span className="inline-block w-6 text-black fill-current mr-2">
                                                        <PhoneIcon />
                                                    </span>
                                                    <div>
                                                        <a href="tel:1300 023 370" title="Click to call Rowmark Australia" className="rounded-md text-base hover:bg-primary text-black text-left w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200">
                                                            1300 023 370
                                                        </a>
                                                        <a href="mailto:sales@rowmark.com.au" title="Click to email Rowmark Australia" className="rounded-md hover:bg-primary text-black mr-1 text-xs text-left w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200">
                                                            sales@sales.here.li
                                                        </a>
                                                    </div>
                                                </div>

                                                <div style={{ minWidth: '330px' }} className="rounded-lg text-black text-left text-sm py-2 px-4 w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200 cursor-default">
                                                    <span className="inline-block w-10 text-black fill-current mr-2">
                                                        <PinIcon />
                                                    </span>
                                                    100 Prospect Hwy, Parramatta, <br />New South Wales, Australia
                                                </div>

                                                <div style={{ minWidth: '80px' }}>
                                                    <a href="/cart" className="block relative focus:outline-nonefocus:ring focus:border-primary-300 flex items-center justify-center">
                                                        <span className="inline-block w-6 text-black fill-current mr-2">
                                                            <CartIcon />
                                                        </span>
                                                        <div className="">
                                                            Cart
                                                            <div className="text-xs">5 items</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="max-w-7xl mx-auto relative">
                                    <div className="flex items-center justify-between">
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
                                                <Link href={`/collection/sales`}>
                                                    <a className="menu__label">
                                                        <span className="text-danger">SALES</span>
                                                    </a>
                                                </Link>
                                            </nav>
                                            <nav className="menu">
                                                <Link href={`/styleguide`}>
                                                    <a className="menu__label">STYLEGUIDE</a>
                                                </Link>
                                            </nav>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            <nav className="menu">
                                                <Link href={`/login`}>
                                                    <a className="menu__label">Login</a>
                                                </Link>
                                                <Link href={`/login`}>
                                                    <a className="menu__label">Register</a>
                                                </Link>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Mobile menu */}
                <div id="mobile-menu" className={clsx("block lg:hidden bg-neutral-100 border-b border-neutral-200")}>
                    <div id="mobile-menu__topbar">
                        <div className="p-2 flex flex-row items-center">

                            <div id="mobile-menu__hamburger" className="w-12">
                                <button target="-1" onClick={toggleMobileMenu()} className="w-10 h-10 px-2 focus:outline-none focus:ring focus:border-primary flex items-center justify-center">
                                    <span className="w-full fill-current text-black">
                                        <MenuIcon />
                                    </span>
                                </button>
                            </div>

                            <div id="mobile-menu__logo" className="flex-1">
                                <Link href={`/`}>
                                    <a className="block flex items-center justify-center relative focus:outline-none focus:ring focus:border-primary">
                                        <img src='/img/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} style={{ width: "150px" }} />
                                    </a>
                                </Link>
                            </div>

                            <div id="mobile-menu__users" className="w-12">
                                <div className="flex flex-center items-center justify-end">
                                    <div className="ml-6">
                                        <div className="flex flex-row items-center">
                                            <a href="/cart" className="relative w-10 h-10 px-2 focus:outline-none focus:ring focus:border-primary flex items-center justify-center">
                                                <span className="w-full">
                                                    <CartIcon />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobile-menu__sidebar" className={clsx(state.isMobileMenuOpened ? "block" : "hidden")}>
                        <div style={{ maxWidth: "350px" }} className="fixed top-0 left-0 h-full w-full overflow-y-scroll overflow-x-hidden z-50 bg-white shadow-lg border-r border-neutral-300">

                            {/* Mobile menu Level 1 */}
                            <div className="mobile-menu__level-1" data-name="Root">
                                <div className="h-12 flex items-center">
                                    <h2 className="flex-1 pl-4">Menu</h2>
                                    <button onClick={toggleMobileMenu()} tabIndex="0" className="w-10 h-10 mr-2 py-2 px-2 focus:outline-none focus:ring flex items-center justify-center z-50">
                                        <CrossIcon />
                                    </button>
                                </div>

                                <div className="pt-1 bg-neutral-100"></div>

                                <div className="">
                                    <form className="relative" action="/search">
                                        <input id="GlobalSearch" type="text" placeholder="Search" name="q" data-live-search-input=""
                                            className="relative z-30 text-base rounded-sm placeholder-neutral-400 py-2 pr-10 pl-4 w-full focus:outline-none focus:ring focus:border-primary-300" />
                                        <button className="absolute right-4 top-0 z-30" type="submit">
                                            <span className="block w-6 py-2 fill-current text-neutral-600">
                                                <SearchIcon />
                                            </span>
                                        </button>
                                        <div id="GloablSearchResult" className="absolute w-full top-full left-0 z-30"></div>
                                    </form>
                                </div>

                                <div className="pt-1 bg-neutral-100"></div>

                                <div className="pl-2 pr-1 pt-1">
                                    <button className="w-full px-2" onClick={openMobileNav('Megamenu')}>
                                        <div className="py-2 flex items-center">
                                            <div className="flex-1 text-left">Megamenu</div>
                                            <div className=""><ChevronRightSmall /></div>
                                        </div>
                                    </button>
                                    <button className="w-full px-2" onClick={openMobileNav('Dropdown')}>
                                        <div className="py-2 flex items-center">
                                            <div className="flex-1 text-left">Dropdown</div>
                                            <div className=""><ChevronRightSmall /></div>
                                        </div>
                                    </button>
                                    <button className="w-full px-2" onClick={openMobileNav('Header Layouts')}>
                                        <div className="py-2 flex items-center">
                                            <div className="flex-1 text-left">Header Layouts</div>
                                            <div className=""><ChevronRightSmall /></div>
                                        </div>
                                    </button>
                                    <button className="w-full px-2">
                                        <div className="py-2 flex items-center">
                                            <div className="flex-1 text-left text-danger">SALES</div>
                                        </div>
                                    </button>
                                    <button className="w-full px-2">
                                        <div className="py-2 flex items-center">
                                            <div className="flex-1 text-left">STYLEGUIDE</div>
                                        </div>
                                    </button>
                                </div>

                                <div className="pt-1 bg-neutral-100"></div>

                                <div className="pt-1 px-3">
                                    <div className="w-full flex flex-col flex-wrap">
                                        <div className="py-2 flex flex-row items-center">
                                            <span className="inline-block w-6 text-black fill-current mr-2">
                                                <PhoneIcon />
                                            </span>
                                            <a href="tel:1300 023 370" title="Click to call Rowmark Australia" className="rounded-md text-base text-black text-left w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200">
                                                1300 023 370
                                            </a>
                                        </div>

                                        <div className="py-2 flex flex-row items-center">
                                            <span className="inline-block w-6 text-black fill-current mr-2">
                                                <PhoneIcon />
                                            </span>
                                            <a href="mailto:sales@rowmark.com.au" title="Click to email Rowmark Australia" className="rounded-md text-black mr-1 text-left w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200">
                                                sales@sales.here.li
                                            </a>
                                        </div>

                                        <div className="py-2 rounded-lg text-black text-left text-sm w-full focus:outline-none focus:ring focus:border-primary-300 flex flex-row items-center transition duration-200 cursor-default">
                                            <span className="inline-block w-6 text-black fill-current mr-2">
                                                <PinIcon />
                                            </span>
                                            100 Prospect Hwy, Parramatta, <br />New South Wales, Australia
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile menu Level 2 */}
                            <div className="mobile-menu__level-2 hidden" data-name="Megamenu"></div>
                            <div className="mobile-menu__level-2 hidden" data-name="Dropdown"></div>
                            <div className="mobile-menu__level-2 hidden" data-name="Header Layouts"></div>
                        </div>
                    </div>

                    <div id="mobile-menu__overlay"
                        onClick={toggleMobileMenu()}
                        className={clsx(state.isMobileMenuOpened ? "block" : "hidden", "fixed top-0 left-0 w-full h-full bg-white bg-opacity-80")}>
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
                                    <Link href={`/`}>
                                        <a className="block flex items-center justify-center relative text-white fill-current">
                                            <img src='/img/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                        </a>
                                    </Link>
                                </div>
                                <div className="mt-4 text-xs text-center">
                                    An online store by Some Company Name Pty Ltd. ABN: 123567890
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
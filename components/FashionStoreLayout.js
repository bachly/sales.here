import Link from "next/link";
import Meta from './Meta';
import PackageJSON from '../package.json';
import Container from "./Container";
import { UserIcon, CartIcon, SearchIcon, PhoneIcon, TruckIcon, ExchangeIcon, LockIcon } from "./Icons";

export default function Layout({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen font-body">
            <Meta />

            <header id="Header">
                <div className="bg-dust-primary text-dust-light py-1 text-center text-sm uppercase">
                    We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.
                </div>
                <Container>
                    <div className="relative py-4">
                        <div className="relative z-10 flex items-center">
                            <Link href="/">
                                <a className="w-24 flex items-center relative" style={{ top: '3px' }}>
                                    <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                </a>
                            </Link>
                            <div className="ml-6 flex-1 flex items-center">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/products">Products</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                                <NavLink href="/styleguide">Styleguide</NavLink>
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

            <footer id="Footer" className="pt-32" />
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
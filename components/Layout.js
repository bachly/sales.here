import Link from "next/link";
import Meta from '../components/Meta';
import PackageJSON from '../package.json';
import Container from "./Container";

export default function Layout({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen font-body">
            <Meta />

            <header id="Header">
                <div className="bg-primary-500 h-1"></div>
                <Container>
                    <div className="relative py-6">
                        <div className="relative z-10 flex items-center">
                            <Link href="/">
                                <span className="w-28 flex items-center">
                                    <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                                </span>
                            </Link>
                            <div className="ml-6 flex-1 flex items-center">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/products">Products</NavLink>
                                <NavLink href="/ideas">Ideas</NavLink>
                                <NavLink href="/styleguide">Styleguide</NavLink>
                            </div>
                            <div className="flex itens-center">
                                <a className="bg-gray-50 hover:bg-gray-100 py-2 px-6 text-sm rounded-sm">Account</a>
                                <a className="ml-2 bg-primary hover:bg-primary-hovered py-2 px-6 text-sm rounded-sm">Cart</a>
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
        <a className="ml-8 leading-none tracking-wide text-sm flex items-center text-opacity-70 hover:text-opacity-100 transition duration-200">
            {children}
        </a>
    </Link>
}
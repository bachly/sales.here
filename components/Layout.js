import Link from "next/link";
import Meta from '../components/Meta';
import PackageJSON from '../package.json';

export default function Layout({ children }) {
    const sitename = `${PackageJSON.site_settings.sitename}`;
    return (
        <div id="Layout" className="min-h-screen">
            <Meta />

            <header id="Header" className="">
                <div className="relative py-6 px-12">
                    <div className="relative z-10 flex items-center">
                        <Link href="/">
                            <span className="w-40 flex items-center justify-center">
                                <img src='/logo.svg' alt={`${sitename} logo`} title={`${sitename} logo`} />
                            </span>
                        </Link>
                        <div className="flex-1 flex items-center">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/products">Products</NavLink>
                        </div>
                    </div>
                </div>
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
import Link from "next/link";

export function LinkWithChevron({ children }) {
    return <Link href="/">
        <a className="with-chevron">
            {children}
        </a>
    </Link>
}
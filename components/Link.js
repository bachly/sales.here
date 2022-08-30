import clsx from "clsx";
import Link from "next/link";

export function LinkWithChevron({ href, children, className = '' }) {
    return <Link href={href}>
        <a className={clsx(`with-chevron`, className)}>
            {children}
        </a>
    </Link>
}

export function LinkAsButton({ href, children, className = '' }) {
    return <Link href={href}>
        <a className={clsx(`button`, className)}>
            {children}
        </a>
    </Link>
}
import clsx from "clsx"

export default function ({ onClick, children, dust-primary, dust-secondary, disabled, className }) {
    if (disabled) {
        return <button disabled className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    }

    return <button className={clsx(dust-primary && "dust-primary", dust-secondary && "dust-secondary", `button ${className}`)} onClick={onClick}>
        {children}
    </button>
}
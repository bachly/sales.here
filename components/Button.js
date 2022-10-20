import clsx from "clsx"

export default function ({ onClick, children, primary, secondary, disabled, className }) {
    if (disabled) {
        return <button disabled className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    }

    return <button className={clsx(primary && "dust-primary", secondary && "dust-secondary", `button ${className}`)} onClick={onClick}>
        {children}
    </button>
}
import clsx from "clsx"

export default function ({ onClick, children, primary, secondary, disabled, className }) {
    if (disabled) {
        return <button disabled className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    }

    return <button className={clsx(primary && "coffee-primary", secondary && "coffee-secondary", `button ${className}`)} onClick={onClick}>
        {children}
    </button>
}
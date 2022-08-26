import clsx from "clsx"

export default function ({ onClick, children, primary, hovered, disabled, className }) {
    if (disabled) {
        return <button disabled className={className} onClick={onClick}>
            {children}
        </button>
    }

    return <button className={clsx(primary && "primary", hovered && "hovered", className)} onClick={onClick}>
        {children}
    </button>
}
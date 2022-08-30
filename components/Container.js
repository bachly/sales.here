export default function Container({ children, className }) {
    return <div className={`container max-w-7xl px-4 mx-auto ${className}`}>
        {children}
    </div>
}
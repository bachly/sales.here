export default function Container({ children, className }) {
    return <div className={`container max-w-7xl mx-auto ${className}`}>
        {children}
    </div>
}
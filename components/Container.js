export default function Container({ children }) {
    return <div className="container max-w-7xl mx-auto">
        <div className="container__inner px-4">
            {children}
        </div>
    </div>
}
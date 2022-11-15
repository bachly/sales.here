export default function Announcement({ children }) {
    return <div className="bg-brand-primary text-brand-light py-1 text-center text-sm uppercase">
        {children}
    </div>
}
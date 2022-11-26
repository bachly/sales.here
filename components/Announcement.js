export default function Announcement({ children }) {
    return <div className="bg-primary text-white py-1 px-1 text-center text-xs lg:text-sm uppercase">
        {children}
    </div>
}
export function Highglihts() {
    return <section id="highlights" className="bg-brand-light py-2">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="mr-2">
                        <PhoneIcon />
                    </span>
                    +61 123 456 789
                </div>
                <div className="flex items-center">
                    <span className="mr-2">
                        <TruckIcon />
                    </span>Free shipping for $75+ orders</div>
                <div className="flex items-center">
                    <span className="mr-2">
                        <ExchangeIcon />
                    </span>30-day free return</div>
                <div className="flex items-center">
                    <span className="mr-2">
                        <LockIcon />
                    </span>Secured payment</div>
            </div>
        </div>
    </section>
}
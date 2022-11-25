import Link from "next/link";
import LayoutStore from "../../components/LayoutStore";

const DEMO_BASE_URL = '/shop';

const BANNERS = {
    product: new Array(12).fill(' '),
    blog: new Array(12).fill(' '),
    sales: [
        "mega-sales",
        "frenzy-sales",
        "clearance-sales",
        "birthday-sales",
        "black-friday",
        "tax-year",
        "fathers-day",
        "mothers-day",
        "valentine",
        "summer",
        "winnter",
        "spring",
        "autumn",
        "back-to-school",
        "off-percent",
        "half-price-deals"
    ],
    holidays: [
        "new-year-day",
        "new-year-eves",
        "national-day",
        "easter",
        "labour-day",
        "children-day",
        "christmas-1",
        "christmas-2",
        "happy-holiday-1",
        "happy-holiday-2",
        "happy-festival-1",
        "happy-festival-2",
    ],
}

export default function BannersPageForStore() {
    return <LayoutStore>
        <section id="pageTitle" className="bg-light py-6">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="mt-1 text-3xl font-bold text-center text-dark">
                    {BANNERS.product.length + BANNERS.sales.length + BANNERS.holidays.length + BANNERS.blog.length} Sample Banners for Every Week of The Year
                </h1>
            </div>
        </section>

        <section id="main" className="mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="pb-2 border-b border-gray-200">{BANNERS.product.length} Product Highlight Banners</h2>

                <div className="py-12 grid grid-cols-4 gap-4">
                    {BANNERS.product.map(item => {
                        return <div className="pb-2/3 bg-gray-100"></div>
                    })}
                </div>

                <h2 className="pb-2 border-b border-gray-200">{BANNERS.sales.length} Sales Banners</h2>

                <div className="py-12 grid grid-cols-4 gap-4">
                    {BANNERS.sales.map(item => {
                        return <div className="pb-2/3 bg-gray-100"></div>
                    })}
                </div>

                <h2 className="pb-2 border-b border-gray-200">{BANNERS.holidays.length} Holiday Banners</h2>

                <div className="py-12 grid grid-cols-4 gap-4">
                    {BANNERS.holidays.map(item => {
                        return <div className="pb-2/3 bg-gray-100"></div>
                    })}
                </div>

                <h2 className="pb-2 border-b border-gray-200">{BANNERS.blog.length} Blog Banners</h2>

                <div className="py-12 grid grid-cols-4 gap-4">
                    {BANNERS.blog.map(item => {
                        return <div className="pb-2/3 bg-gray-100"></div>
                    })}
                </div>
            </div>
        </section>
    </LayoutStore>
}
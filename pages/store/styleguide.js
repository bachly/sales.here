import Link from "next/link";
import LayoutStore from "../../components/LayoutStore";

const DEMO_BASE_URL = '/store';

export default function StyleguidePageForStore() {
    return <LayoutStore>
        <section id="pageTitle" className="bg-light py-6">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="mt-1 text-3xl font-bold text-center text-dark">
                    Styleguide
                </h1>
            </div>
        </section>

        <section id="main" className="mt-12">
            <div className="max-w-7xl mx-auto px-4">
                
            </div>
        </section>
    </LayoutStore>
}
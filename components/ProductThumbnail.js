export default function ProductThumbnail({ product, collection }) {
    return <Link key={key} href={`${DEMO_BASE_URL}/product/${collection.slug}_${product.slug}`} passHref={true}>
        <a className="block bg-white p-2 shadow-sm rounded-md overflow-hidden flex flex-col border-2 border-transparent hover:border-primary hover:border-opacity-20 transition duration-200">
            <div className="flex-1 py-12" style={{ minHeight: "480px" }}>
                <div className="h-full flex flex-col justify-center">
                    <img src={product.images[0]} />
                </div>
            </div>
            <div className="text-sm">
                {product.title}
            </div>
        </a>
    </Link>
}
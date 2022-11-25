import { useRouter } from "next/router"
import LayoutStore from '../../../components/LayoutStore'
import Head from 'next/head'
import Link from 'next/link'
import { getCollectionBySlug, getStoreCollections } from '../../../lib/utils'
import Image from "next/future/image"

const DEMO_BASE_URL = '/shop';

export default function CollectionPage({ source, collection }) {
    const router = useRouter()

    if (!router.isFallback && !collection?.slug) {
        return <>404</>
    }

    return (
        <>
            {
                router.isFallback ? (
                    <>Loading…</>
                ) : (
                    <LayoutStore post={collection}>
                        <Head>
                            <title>{collection.title}</title>
                            <meta name="description" content={collection.description} />
                            <meta property="og:title" content={collection.title} />
                            <meta property="og:description" content={collection.description} />
                            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${collection.image}`} />
                            <meta property="og:type" content="article" />
                            <meta property="article:publisher" content={process.env.NEXT_PUBLIC_PUBLISHER_FACEBOOK_URL} />
                            <meta property="article:published_time" content={collection.publishedTime} />
                            <meta property="article:modified_item" content={collection.modifiedTime} />
                            <meta name="robots" content="all" />
                        </Head>

                        <main className="">

                            <section id="pageTitle" className="bg-light">
                                <div className="max-w-7xl mx-auto px-8 py-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <Link href={`${DEMO_BASE_URL}`} passHref={true}>
                                            <a className="block text-dark text-sm underline">SHOP</a>
                                        </Link>
                                        <h1 className="mt-1 text-3xl font-bold text-dark">{collection.title}</h1>
                                        <div>{collection.description}</div>
                                    </div>
                                </div>
                            </section>

                            <section id="filters" className="py-3 shadow-sm">
                                <div className="max-w-7xl mx-auto px-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {/* <button className="px-6 py-2 border-gray-400 hover:bg-gray-200 transition duration-100 rounded-md mr-2">
                                                <span className="flex items-center">
                                                    Filters
                                                </span>
                                            </button> */}
                                            <button className="text-sm px-5 py-1 border border-gray-200 hover:bg-gray-200 transition duration-100 rounded-sm mr-2">Sizes</button>
                                            <button className="text-sm px-5 py-1 border border-gray-200 hover:bg-gray-200 transition duration-100 rounded-sm">Colours</button>
                                        </div>
                                        <div>
                                            <select className="px-2 py-1 border border-gray-200 hover:bg-gray-200 transition duration-100 rounded-sm">
                                                <option value="bestselling">
                                                    Bestselling
                                                </option>
                                                <option value="price-asc">
                                                    Price: Low to High
                                                </option>
                                                <option value="price-desc">
                                                    Price: High to Low
                                                </option>
                                                <option value="price-desc">
                                                    New Arrivals
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="products-grid" className="mt-6">
                                <div className="max-w-7xl mx-auto px-8">
                                    {collection.products && Object.keys(collection.products).length > 0 ?
                                        <div className="grid grid-cols-4 gap-1">
                                            {Object.keys(collection.products).map(productSlug => {
                                                const product = collection.products[productSlug];
                                                return <Link key={product.slug} href={`${DEMO_BASE_URL}/product/${collection.slug}_${product.slug}`} passHref={true}>
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
                                            })}
                                        </div> : <div>
                                            No product
                                        </div>}
                                </div>
                            </section>
                        </main>
                    </LayoutStore>
                )
            }
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const collection = getCollectionBySlug({ slug: params.slug })
    return {
        props: {
            collection
        },
    }
}

export const getStaticPaths = async () => {
    const collections = getStoreCollections();
    const paths = Object.keys(collections)
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
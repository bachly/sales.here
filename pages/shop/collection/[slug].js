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

                            <section id="breadcrumbs" className="bg-white shadow-sm">
                                <div className="max-w-7xl mx-auto px-4 lg:px-0 py-4 lg:py-8">
                                    <h1 className="mt-1 text-xl lg:text-3xl font-bold">{collection.title}</h1>
                                    <div>{collection.description}</div>

                                    <div id="filters" className="mt-6 w-full">
                                        <select className="px-2 h-10 bg-neutral-100 transition duration-100 rounded-sm flex items-center text-sm">
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
                            </section>

                            <section id="products-grid" className="my-1 lg:my-1">
                                <div className="mx-auto">
                                    {collection.products && Object.keys(collection.products).length > 0 ?
                                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-1">

                                            {Object.keys(collection.products).map(productSlug => {
                                                const product = collection.products[productSlug];
                                                return <Link key={product.slug} href={`${DEMO_BASE_URL}/product/${collection.slug}_${product.slug}`} passHref={true}>
                                                    <a className="block bg-white p-1 shadow-sm overflow-hidden flex flex-col border border-neutral-100 hover:border-neutral-900 transition duration-200">
                                                        <div className="flex-1 py-12" style={{ minHeight: "240px" }}>
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
import fs from 'fs'
import path from 'path'
import { useRouter } from "next/router"
import { collectionFilePaths, PRODUCTS_PATH } from "../../../lib/utils"
import LayoutStore from '../../../components/LayoutStore'
import Head from 'next/head'
import Link from 'next/link'

const DEMO_BASE_URL = '/store';

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

                            <section id="breadcrumbs" className="bg-light py-6">
                                <div className="max-w-4xl mx-auto">
                                    <Link href={`${DEMO_BASE_URL}`} passHref={true}>
                                        <a className="block text-center text-dark text-sm underline">SHOP</a>
                                    </Link>
                                    <h1 className="mt-1 text-3xl font-bold text-center text-dark">{collection.title}</h1>
                                </div>
                            </section>

                            <section id="filters" className="py-3 bg-light bg-opacity-30">
                                <div className="max-w-8xl mx-auto">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <button className="px-6 py-2 bg-white border-2 border-dark border-opacity-20 hover:bg-primary hover:text-light transition duration-100 rounded-md mr-6">
                                                <span className="flex items-center">
                                                    Filters
                                                </span>
                                            </button>
                                            <button className="text-sm px-3 py-1 bg-primary bg-opacity-20 hover:bg-primary hover:bg-opacity-30 transition duration-100 rounded-md mr-2">Size: M</button>
                                            <button className="text-sm px-3 py-1 bg-primary bg-opacity-20 hover:bg-primary hover:bg-opacity-30 transition duration-100 rounded-md">Brand: Gudilio</button>
                                        </div>
                                        <div>
                                            <select className="px-2 py-2 bg-white border-2 border-dark border-opacity-20 transition duration-100 rounded-md">
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
                                <div className="max-w-8xl mx-auto">
                                    {collection.products && Object.keys(collection.products).length > 0 ?
                                        <div className="grid grid-cols-5 gap-1">
                                            {Object.keys(collection.products).map(key => {
                                                const product = collection.products[key];
                                                return <Link key={key} href={`${DEMO_BASE_URL}/product/${collection.slug}_${product.slug}`} passHref={true}>
                                                    <a className="block bg-white p-2 shadow-sm rounded-md overflow-hidden flex flex-col border-2 border-transparent hover:border-primary hover:border-opacity-20 transition duration-200">
                                                        <div className="flex-1 py-12" style={{ minHeight: "480px" }}>
                                                            <div className="h-full flex flex-col justify-center">
                                                                <img src={product.images[0]}/>
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
    const fullPath = path.join(PRODUCTS_PATH, `${params.slug}.json`)
    const source = fs.readFileSync(fullPath)
    const stat = fs.statSync(fullPath)
    const data = JSON.parse(source)

    return {
        props: {
            collection: {
                ...data,
                slug: params.slug,
                publishedTime: stat.ctime.toISOString(),
                modifiedTime: stat.mtime.toISOString()
            }
        },
    }
}

export const getStaticPaths = async () => {
    const paths = collectionFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.json?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
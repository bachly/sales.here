import fs from 'fs'
import path from 'path'
import { useRouter } from "next/router"
import { productFilePaths, PRODUCTS_PATH } from "../../../lib/utils"
import RetailStoreLayout from '../../../components/RetailStoreLayout'
import Head from 'next/head'
import Link from 'next/link'
import { BookmarkIcon, CheckMarkIcon, LockIcon } from '../../../components/Icons'
import _ from 'underscore'
import Image from 'next/future/image'

const DEMO_BASE_URL = '/retail';

export default function ProductPage({ product, collection }) {
    const router = useRouter()

    if (!router.isFallback && !product?.slug) {
        return <>404</>
    }

    function goToCollectionPage() {
        return event => {
            event.preventDefault();
            router.back();
        }
    }

    return (
        <>
            {
                router.isFallback ? (
                    <>Loading…</>
                ) : (
                    <RetailStoreLayout>
                        <Head>
                            <title>{product.title}</title>
                            <meta name="description" content={product.description} />
                            <meta property="og:title" content={product.title} />
                            <meta property="og:description" content={product.description} />
                            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${product.images[0]}`} />
                            <meta property="og:type" content="article" />
                            <meta property="article:publisher" content={process.env.NEXT_PUBLIC_PUBLISHER_FACEBOOK_URL} />
                            <meta property="article:published_time" content={product.publishedTime} />
                            <meta property="article:modified_item" content={product.modifiedTime} />
                            <meta name="robots" content="all" />
                        </Head>

                        <main className="">

                            <section id="breadcrumbs" className="bg-brand-light py-2">
                                <div className="max-w-7xl mx-auto px-4">
                                    <div className="flex items-center justify-center flex-row flex-wrap">
                                        <Link href={`${DEMO_BASE_URL}`} passHref={true}>
                                            <a className="text-brand-dark text-sm hover:underline">Shop</a>
                                        </Link>
                                        <span className="px-2 text-base">&raquo;</span>
                                        <a onClick={goToCollectionPage()} className="text-brand-dark text-sm hover:underline cursor-pointer">{collection.title}</a>
                                        <span className="px-2 text-base">&raquo;</span>
                                        <div className="text-sm text-brand-dark text-opacity-50">{product.title}</div>
                                    </div>
                                </div>
                            </section>

                            <section id="productDetails">
                                <div className="max-w-7xl mx-auto px-4">
                                    <div className="pt-12 flex items-start flex-wrap">
                                        <div id="productMedia" className="w-1/2">
                                            <div className="w-full bg-brand-light bg-opacity-50 relative">
                                                <img src={product.images[0]} className="w-full" />
                                            </div>
                                        </div>

                                        <div id="productForm" className="w-1/2 px-12">
                                            <h1 id="productTitle" className="text-2xl font-bold max-w-sm">{product.title}</h1>

                                            <div id="productReviews" className="mt-2 flex items-center">
                                                <span className="text-xl">
                                                    &#9734; &#9734; &#9734; &#9734; &#9734;
                                                </span>
                                                <span className="text-sm ml-4">
                                                    Be the first to review
                                                </span>
                                            </div>

                                            <div id="productPrice" className="mt-6 max-w-sm">
                                                <div className="flex items-center">
                                                    <div className="text-3xl font-black">
                                                        {product.price}
                                                    </div>
                                                    <div className="ml-2 text-base line-through text-brand-dark text-opacity-40">
                                                        {product.compareAtPrice}
                                                    </div>
                                                    <div className="ml-2 text-sm py-1 px-2 rounded-md bg-brand-primary text-brand-light">
                                                        -40%
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="productStock" className="mt-8">
                                                <div className="font-bold text-sm">Delivery:</div>
                                                <ul className="mt-2 text-sm">
                                                    <li className="flex">
                                                        <span className="w-6 h-6 mr-2"><CheckMarkIcon /></span>
                                                        In stock. Dispatch in 24 hours</li>
                                                    <li className="flex">
                                                        <span className="w-6 h-6 mr-2"><CheckMarkIcon /></span>
                                                        Free shipping Australia wide.</li>
                                                </ul>
                                            </div>

                                            <div id="productForm" className="mt-6 max-w-sm">
                                                <div className="flex items-center rounded-md bg-brand-light p-3 ">
                                                    <div className="bg-white flex items-center rounded-md h-12">
                                                        <button className="text-xl h-12 px-3">-</button>
                                                        <input type="text" className="h-12 bg-white w-10 text-center mx-1" defaultValue="1" />
                                                        <button className="text-xl h-12 px-3">+</button>
                                                    </div>
                                                    <div className="flex-1 ml-3">
                                                        <button className="w-full bg-brand-primary text-brand-light hover:bg-brand-secondary transition duration-200 h-12 rounded-md text-xl">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex items-center justify-center">
                                                    <LockIcon />
                                                    <span className="ml-1 text-sm">
                                                        Secured payment with popular payment cards.
                                                    </span>
                                                </div>
                                            </div>

                                            <div id="productBookmark" className="mt-12 max-w-sm">
                                                <div className="font-bold text-sm">Still deciding?</div>
                                                <div className="mt-2 text-sm">
                                                    <div className="flex items-start">
                                                        <div className="w-2/3">
                                                            Add this item to a list and easily come back to it later.
                                                        </div>
                                                        <div className="w-1/3 flex justify-end">
                                                            <BookmarkIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="productDescription" className="mt-12">
                                <div className="max-w-7xl mx-auto px-4">
                                    <hr />
                                    <div className="my-6 columns-2 gap-12">
                                        <div className="font-bold text-sm">Product Description</div>
                                        <div className="mt-2" dangerouslySetInnerHTML={{ __html: product.body }}></div>
                                    </div>
                                    <hr />
                                </div>
                            </section>

                            {collection.products && Object.keys(collection.products).length > 0 &&
                                <section className="mt-6" id="productRecommendations">
                                    <div className="max-w-7xl mx-auto px-4">
                                        <h2 className="py-12 text-center">You may also like</h2>
                                        <div className="grid grid-cols-5 gap-1">
                                            {_.first(Object.keys(collection.products), 5).map((key, index) => {
                                                const product = collection.products[key];
                                                return <Link key={key} href={`${DEMO_BASE_URL}/product/${collection.slug}_${product.slug}`} passHref={true}>
                                                    <a className="block bg-white p-2 shadow-sm rounded-md overflow-hidden flex flex-col border-2 border-transparent hover:border-brand-primary hover:border-opacity-20 transition duration-200">
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
                                        </div>
                                    </div>
                                </section>}
                        </main>
                    </RetailStoreLayout>
                )
            }
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const slugs = params.slug.split('_');

    const collectionSlug = slugs[0];
    const productSlug = slugs[1];

    const fullPath = path.join(PRODUCTS_PATH, `${collectionSlug}.json`)
    const source = fs.readFileSync(fullPath)
    const stat = fs.statSync(fullPath)
    const collection = JSON.parse(source)
    const productData = collection.products[productSlug]

    return {
        props: {
            collection,
            product: {
                ...productData,
                publishedTime: stat.ctime.toISOString(),
                modifiedTime: stat.mtime.toISOString()
            }
        },
    }
}

export const getStaticPaths = async () => {
    const paths = productFilePaths()
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
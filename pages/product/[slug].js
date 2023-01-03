import { useRouter } from "next/router"
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { BookmarkIcon, CheckMarkIcon, LockIcon } from '../../components/Icons'
import _ from 'underscore'
import ProductMedia from '../../components/ProductMedia'
import { getStoreCollections, getStoreCollectionsWithProducts, getStoreProducts } from '../../lib/utils'

export default function ProductPage({ product, collection }) {
    const router = useRouter()
    const productMedia = product.images && product.images.map(image => ({ type: 'image', src: image }))

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
                    <Layout>
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

                        <main className="bg-neutral-100">

                            <section id="breadcrumbs" className="bg-white py-2">
                                <div className="max-w-7xl mx-auto px-4 lg:px-0">
                                    <div className="flex items-center justify-start flex-row flex-wrap">
                                        <Link href={`/`} passHref={true}>
                                            <a className="text-dark text-sm hover:underline">Shop</a>
                                        </Link>
                                        <span className="px-2 text-base">&raquo;</span>
                                        <a onClick={goToCollectionPage()} className="text-dark text-sm hover:underline cursor-pointer">{collection.title}</a>
                                        <span className="px-2 text-base">&raquo;</span>
                                        <div className="text-sm text-dark text-opacity-50">{product.title}</div>
                                    </div>
                                </div>
                            </section>

                            <section id="productDetails" className="bg-white my-1 shadow-sm">
                                <div className="max-w-7xl mx-auto">
                                    <div className="flex items-start flex-wrap">

                                        <div className="w-full lg:w-1/2 py-4 lg:py-12">
                                            <ProductMedia media={productMedia} />
                                        </div>

                                        <div id="productForm" className="w-full lg:w-1/2 py-4 lg:py-12 border-t-4 border-neutral-100 lg:border-none">
                                            <div className="max-w-sm mx-auto">
                                                <h1 id="productTitle" className="text-2xl font-bold lg:max-w-sm">{product.title}</h1>

                                                <div id="productReviews" className="mt-2 flex items-center">
                                                    <span className="text-xl">
                                                        &#9734; &#9734; &#9734; &#9734; &#9734;
                                                    </span>
                                                    <span className="text-sm ml-4">
                                                        Be the first to review
                                                    </span>
                                                </div>

                                                <div id="productPrice" className="mt-6 lg:max-w-sm">
                                                    <div className="flex items-center">
                                                        <div className="text-3xl font-black">
                                                            {product.price}
                                                        </div>
                                                        <div className="ml-2 text-base line-through text-dark text-opacity-40">
                                                            {product.compareAtPrice}
                                                        </div>
                                                        <div className="ml-2 text-sm py-1 px-2 rounded-md bg-primary text-light">
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
                                                    <div className="flex items-center rounded-md bg-light p-3 ">
                                                        <div className="bg-white flex items-center rounded-md h-12">
                                                            <button className="text-xl h-12 px-3">-</button>
                                                            <input type="text" className="h-12 bg-white w-10 text-center mx-1" defaultValue="1" />
                                                            <button className="text-xl h-12 px-3">+</button>
                                                        </div>
                                                        <div className="flex-1 ml-3">
                                                            <button className="w-full bg-primary text-light hover:bg-secondary transition duration-200 h-12 rounded-md text-xl">
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
                                </div>
                            </section>

                            <section id="productDescription" className="my-1 bg-white py-2 shadow-sm">
                                <div className="max-w-sm lg:max-w-7xl mx-auto lg:px-4">
                                    <div className="mt-6 mb-4 font-bold text-xl">Product Description</div>
                                    <div className="columns-1 lg:columns-3 gap-12">
                                        <div dangerouslySetInnerHTML={{ __html: product.body }}></div>
                                    </div>
                                    <div className="pt-8"></div>
                                </div>
                            </section>

                            {/* {collection.products && Object.keys(collection.products).length > 0 &&
                                <section className="mt-6" id="productRecommendations">
                                    <div className="max-w-7xl mx-auto px-4">
                                        <h2 className="py-12 text-center">You may also like</h2>
                                        <div className="grid grid-cols-5 gap-1">
                                            {_.first(Object.keys(collection.products), 5).map((key) => {
                                                const product = collection.products[key];
                                                return <Link key={key} href={`/product/${collection.slug}_${product.slug}`} passHref={true}>
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
                                        </div>
                                    </div>
                                </section>} */}
                        </main>
                    </Layout>
                )
            }
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const slugs = params.slug.split('_');
    const collectionSlug = slugs[0];
    const productSlug = slugs[1];

    const storeCollections = getStoreCollections();
    const storeProducts = getStoreProducts();
    const product = storeProducts[productSlug];
    const collection = storeCollections[collectionSlug];

    return {
        props: {
            collection,
            product
        },
    }
}

export const getStaticPaths = async () => {
    const collections = getStoreCollectionsWithProducts();

    const paths = _.flatten(Object.keys(collections).map(collectionSlug => {
        return Object.keys(collections[collectionSlug].products).map(productSlug => {
            return `${collectionSlug}_${productSlug}`
        })
    }))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
import fs from 'fs'
import path from 'path'
import { useRouter } from "next/router"
import { productFilePaths, PRODUCTS_PATH } from "../../../lib/utils"
import FashionStoreLayout from '../../../components/FashionStoreLayout'
import Head from 'next/head'

const DEMO_BASE_URL = '/fashion-store';

export default function ProductPage({ product }) {
    const router = useRouter()

    if (!router.isFallback && !product?.slug) {
        return <>404</>
    }

    return (
        <>
            {
                router.isFallback ? (
                    <>Loading…</>
                ) : (
                    <FashionStoreLayout>
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

                        <main className="bg-coffee-light bg-opacity-10">
                            {product.title} - {product.body}
                        </main>
                    </FashionStoreLayout>
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
    const collectionData = JSON.parse(source)
    const productData = collectionData.products[productSlug]

    return {
        props: {
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
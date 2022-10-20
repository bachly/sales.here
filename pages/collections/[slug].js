import { useRouter } from "next/router"
import { productFilePaths, PRODUCTS_PATH } from "../../lib/utils"

export default function Collection({ source, collection }) {
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
                    <LayoutArticle post={collection}>
                        <Head>
                            <title>{collection.title}</title>
                            <meta name="description" content={collection.description} />
                            <meta property="og:title" content={collection.title} />
                            <meta property="og:description" content={collection.description} />
                            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${collection.ogImage.url}`} />
                            <meta property="og:type" content="article" />
                            <meta property="article:publisher" content={process.env.NEXT_PUBLIC_PUBLISHER_FACEBOOK_URL} />
                            <meta property="article:published_time" content={collection.publishedTime} />
                            <meta property="article:modified_item" content={collection.modifiedTime} />
                            <meta name="robots" content="all" />
                        </Head>
                        <article className="mt-24 relative z-10 max-w-6xl mx-auto">
                            {collection.title}
                            - {collection.description}
                        </article>
                    </LayoutArticle>
                )
            }
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const fullPath = path.join(PRODUCTS_PATH, `${params.slug}.mdx`)
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
    const paths = productFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.json?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
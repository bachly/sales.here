import Head from 'next/head'
import { useRouter } from "next/router";
import PackageJSON from "../package.json";

export default function Meta() {
    const router = useRouter();
    const themeColour = PackageJSON.site_settings.theme_colour;
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color={themeColour}
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content={themeColour} />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content={themeColour} />

            <link rel="alternate" type="application/rss+xml" href="/sitemap.xml" />

            {/* Open Graph Meta Tags - default */}
            <meta property="og:locale" content="en_AU" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />

            {/* Open Graph Meta Tags - dynamic per pagex */}
            {/* <meta property="og:title" content={''} />
            <meta property="og:description" content={''} />
            <meta property="og:image" content={''} /> */}

            <link rel="canonical" href={canonicalUrl} />
        </Head>
    )
}
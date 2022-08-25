import { getAllPosts } from "../lib/api";

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
     <!--Homepage-->
       <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
     </url>
     ${posts
            .map(({ slug }) => {
                return `
       <url>
           <loc>${`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${slug}`}</loc>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const posts = getAllPosts();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
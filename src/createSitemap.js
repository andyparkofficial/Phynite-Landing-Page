const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

const sitemap = new SitemapStream({ hostname: 'https://www.phynite.io' });
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

const today = new Date()

sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.9, lastmod: today});
sitemap.write({ url: '/getStarted', changefreq: 'weekly', priority: 0.8, lastmod: today });
sitemap.write({ url: '/blogs', changefreq: 'weekly', priority: 0.7, lastmod: today });

const blogNames=["the_importance_of_physically_backed_nfts", "5_unique_uses_for_nft_technology"]
for (let i = 0; i < blogNames.length; i++){
    sitemap.write({ url: `/blog/${blogNames[i]}`, changefreq: 'weekly', priority: 0.6, lastmod: today });
}

sitemap.end();
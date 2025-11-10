/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://serviwo.com',
  generateRobotsTxt: true, // (optional) Generate robots.txt
  generateIndexSitemap: false, // (optional) Generate index sitemap for large sites
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://serviwo.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // Additional paths to include
  additionalPaths: async (config) => {
    const result = [];
    
    // Add custom paths with specific priorities
    result.push({
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });
    
    result.push({
      loc: '/contact',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });
    
    // Add project pages
    const projectIds = ['1', '2', '3', '4'];
    projectIds.forEach((id) => {
      result.push({
        loc: `/projects/${id}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });
    
    return result;
  },
};


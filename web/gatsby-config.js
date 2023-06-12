/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sanity CMS`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: 'm2acf3tv',
      dataset: 'production',
      watchMode: true,
      token:
        'sk2KS3fPpc1WKYtus2sygjK0yAaO4XlFIXTLjVwQ9XVUWCAMb1oPZGpprY98sIFT7HbOhSfk98P9vu3SuHpBvIkxToxTTr2HiZX5UsodffH1B8ay4YrbnC9uZc3yJFgOkB5LZO8z0XQRC6a3TlzjxdiV6035srmJYpSBxw2qN9Yw3pKNyAH0'
    }
  },]
};
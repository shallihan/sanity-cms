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
        'skBpgwu706R0YjmJfFVXfPzOIvyFQ7zz3Nlmdp3Y7b8b2JL0dg9loAMqojy01jJDrGox3aaYd3teCyGWcYK0Q8hOULgwuXpoYT7imphQTmApap4Po0vcaznbXU5h9Dt2Eo4YKgho7I1tIpMxHI23MQpVoES6EnTViqy8fYVkoAIM0Dw4kjyw'
    }
  },]
};
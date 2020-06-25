module.exports = {
  siteMetadata: {
    title: `Mohammed Aljefri`,
    description: `Web developer.`,
    baseUrl: `https://mhmdaljefri.dev`,
    author: `@gatsbyjs`,
    navigations: [
      {
        title: "Blog",
        to: "/blog",
      },
      {
        title: "Contact",
        to: "/contact",
        hero: true,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-embedder`,
          // `gatsby-remark-graphviz`,
          `gatsby-remark-code-titles`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 104,
            },
          },
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          // convert images using http to https in plugin library READMEs
          `gatsby-remark-http-to-https`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-twitter`,
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
  ],
}

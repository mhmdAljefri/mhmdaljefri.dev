module.exports = {
  siteMetadata: {
    title: `Mohammed Aljefri`,
    description: `Web developer.`,
    siteUrl: `https://mhmdaljefri.dev`,
    github: `https://github.com/mhmdAljefri`,
    twitter: `https://twitter.com/mhmdaljefri`,
    facebook: `https://www.facebook.com/prosigner.mohmd/`,
    youtube: `https://www.youtube.com/channel/UC1sOs7uZTSUTLPBk3AauaQg`,
    author: `@mhmdAljefri`,
    keywords: ["reactjs", "web", "rails", "javascript", "#100DaysOfCode"],
    languages: [
      { code: "en", dir: "ltr", default: true },
      { code: "ar", dir: "rtl" },
    ],
    navigations: [
      {
        translationKey: "Blog",
        to: "/blog",
      },
      {
        translationKey: "Contact",
        to: "/contact",
        hero: true,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {},
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        defaultQuality: 100,
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
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-150405815-1",
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/**"],
        defer: true,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammed Aljefri`,
        short_name: `MHMDAljefri`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        theme_color_in_head: false,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-twitter`,
    // `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        preset: "@theme-ui/preset-funk",
      },
    },
    {
      resolve: "gatsby-theme-style-guide",
      options: {
        // sets path for generated page
        basePath: "/design-system",
      },
    },
    `gatsby-plugin-offline`,
  ],
}

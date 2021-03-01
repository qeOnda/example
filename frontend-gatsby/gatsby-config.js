module.exports = {
  siteMetadata: {
    title: `My Superblog`,
    description: `Gatbsy blog with Strapi as headless CMS`,
    author: `@gatsbyjs & @strapi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: "./src/images",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://YOUR-APP-URL.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [`article`, `user`],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

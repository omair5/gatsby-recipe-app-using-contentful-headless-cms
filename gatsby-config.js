/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // FOR FONT
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // cursive is base family
          'Kalam'
        ],
        display: 'swap'
      }
    },
    // FOR CONTENTFUL
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bzdmehkyp4wl`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },


  ],
}

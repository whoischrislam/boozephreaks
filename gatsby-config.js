module.exports = {
  siteMetadata: {
    title: `Boozephreaks`,
    description: `Doctor Inkwell created Boozephreaks with Vitamin V. In 2006, he was curious about the differences between vodkas. After inviting 30 people to blind taste, rate and notate 30 vodkas, our good Doctor declared it to be the first Boozephreaks event. We've maintained that scientific curiosity and research-based approach since then. We currently have quarterly, monthly and weekly meetings to taste spirits, create cocktails, tour distilleries, invent new cocktail techniques and meet local bartenders. We're always looking to be social so sign up for our mailing list today!`,
    author: `@whoischrislam`,
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
    // `gatsby-plugin-offline`,
  ],
}

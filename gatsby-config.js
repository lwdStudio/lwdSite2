module.exports = {
  siteMetadata: {
    siteUrl: "https://www.liwenduan.com",
    title: "lwdSite3",
    ICPlicense:"鄂ICP备18006410号-2",
    PSBeian:"京公网安备 11011202002643号",
    PSBeianURL: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011202002643",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `dfbozjza`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    'gatsby-plugin-postcss',
  ]
};

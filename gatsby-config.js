module.exports = {
  siteMetadata: {
    siteUrl: "https://www.liwenduan.com",
    title: "lwdSite3",
    ICPlicense:"鄂ICP备18006410号-2",
    PSBeian:"京公网安备 11011202002643号",
    PSBeianURL: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011202002643",
  },
  plugins: [
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
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        watchMode: 'true',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: "/",
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: "lwdSite",
          // all other properties optional
          crumbSeparator: " > ",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lwdSite`,
        short_name: `lwdSite`,
        description: `This website help you learn more about me.`,
        lang:`en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/lwd-stamp-mono-red.svg`,      
        localize: [
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: `这里是力文`,
            short_name: `这里是力文`,
            description: `你可以通过这个网站了解我`,
          },
        ],
      },

    },
  ]
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rich4rd.com",
    title: "This is a Gatsby Demo website",
    description: "This is a Gatsby Demo Website"
  },
  plugins: [
    // React Helmet for Seo and MetaData
    "gatsby-plugin-react-helmet",
    // sitemap for Seo
    "gatsby-plugin-sitemap",
    // Image Plugins
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
  ],
};

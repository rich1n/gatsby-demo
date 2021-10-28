module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rich4rd.com",
    title: "This is a Gatsby Demo website",
    description: "This is a Gatsby Demo Website"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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

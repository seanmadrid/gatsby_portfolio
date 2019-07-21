module.exports = {
  siteMetadata: {
    title: `Sean Madrid`,
    subtitle: `Developer & UX Designer`,
    description: `Implementing big picture ideas, technical solutions, and a sense of style to web-based projects`,
    author: `Sean Madrid`,
    menuLinks:[
      {
         name:'work',
         link:'/work'
      },
      {
         name:'about',
         link:'/about'
      },
      {
         name:'resume',
         link:'/resume'
      },
      {
         name:'contact',
         link:'/contact'
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `content.seanmadrid.com`,
        protocol: `https`, 
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/layouts/index.js`)
        }
   }
  ],
}
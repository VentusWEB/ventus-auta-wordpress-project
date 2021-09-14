const path = require('path');
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'plugins'), 'node_modules'],
    },
  });
};



exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
        allWpVentusautaproduct {
          edges {
            node {
              slug
            }
          }
        }
        
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const singleProductTemplate = path.resolve("src/templates/ProductPage.js")

  data.data.allWpVentusautaproduct.edges.forEach(edge => {
    createPage({
      path: `/oferta/${edge.node.slug}/`,
      component: singleProductTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

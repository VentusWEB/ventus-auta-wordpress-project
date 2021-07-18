const path = require('path');
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allItemsDataJson {
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

  const productTemplate = path.resolve("src/templates/ProductPage.js")

  data.data.allItemsDataJson.edges.forEach(edge => {
    createPage({
      path: `/oferta/${edge.node.slug}/`,
      component: productTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

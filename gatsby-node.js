const path = require(`path`)
const { ENTREPRENEURSHIP_TABLE, DIVERSITY_TABLE } = process.env

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async (resolve) => {
    // Table #1
    const entrepreneurship = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${ENTREPRENEURSHIP_TABLE}" } }) {
          edges {
            node {
              table
              recordId
            }
          }
        }
      }
    `)
    // Loop through each page
    entrepreneurship.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/entrepreneurship/${node.recordId}`,
        component: path.resolve(`./src/templates/entrepreneurship.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    // Table #2
    const diversity = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${DIVERSITY_TABLE}" } }) {
          edges {
            node {
              table
              recordId
            }
          }
        }
      }
    `)
    // Loop through each page
    diversity.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/diversity/${node.recordId}`,
        component: path.resolve(`./src/templates/diversity.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    resolve()
  })
}

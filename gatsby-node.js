const path = require(`path`)
const {
  ENTREPRENEURSHIP_TABLE,
  STARTUP_TABLE,
  VENTURECAPITAL_TABLE,
  NONPROFITORGANIZATIONS_TABLE,
  UNDERREPRESENTEDFOUNDERS_TABLE,
  DIVERSITY_TABLE,
} = process.env

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

    // Table #3
    const startup = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${STARTUP_TABLE}" } }) {
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
    startup.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/startup/${node.recordId}`,
        component: path.resolve(`./src/templates/startup.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    // Table #4
    const venture = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${VENTURECAPITAL_TABLE}" } }) {
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
    venture.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/venture-capital/${node.recordId}`,
        component: path.resolve(`./src/templates/venture-capital.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    // Table #5
    const underrepresented = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${UNDERREPRESENTEDFOUNDERS_TABLE}" } }) {
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
    underrepresented.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/underrepresented-founders/${node.recordId}`,
        component: path.resolve(`./src/templates/underrepresented-founders.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    // Table #6
    const nonprofit = await graphql(`
      {
        allAirtable(filter: { table: { eq: "${NONPROFITORGANIZATIONS_TABLE}" } }) {
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
    nonprofit.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/nonprofit-organizations/${node.recordId}`,
        component: path.resolve(`./src/templates/nonprofit-organizations.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })

    resolve()
  })
}

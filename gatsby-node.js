const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const articlePost = path.resolve(`./src/templates/article.js`)
  return graphql(
    `
      {
        allContentfulArticle {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const articles = result.data.allContentfulArticle.edges

    articles.forEach((article, index) => {
      const previous = index === articles.length - 1 ? null : articles[index + 1].node
      const next = index === 0 ? null : articles[index - 1].node

      createPage({
        path: article.node.slug,
        component: articlePost,
        context: {
          slug: article.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}


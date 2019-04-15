import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class ArticleIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const articles = data.allContentfulArticle.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {articles.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>

              <div>{node.description.description}</div>

            </div>
          )
        })}
      </Layout>
    )
  }
}

export default ArticleIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArticle {
      edges {
        node {
          title
          slug
          description {
            description
          }
        }
      }
    }
  }
`

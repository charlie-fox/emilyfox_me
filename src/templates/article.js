import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={article.title}
          description={article.title}
        />
        <h1>{article.title}</h1>

        <div>{article.description.description}</div>

        <span>{article.body ? <span>{article.body.body}</span> : <span>View Article Somewhere Else</span>}</span>              
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}

        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulArticle( slug: { eq: $slug }) {
      title
      description {
        description
      }
      body {
        body
      }
    }
  }
`

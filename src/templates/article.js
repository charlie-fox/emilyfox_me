import React from "react"
import { Link, graphql } from "gatsby"

import Img from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/navigation"

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={article.title}
          description={article.description.description}
        />
        <Nav />
        
        <div>
          
          {article.body ?
            <div className="article-local">
              <div className="article-hero">
                <div>
                  <Img className="full-screen-image" fluid={article.featuredImage.fluid} />
                  <h2 className="title">{article.title}</h2>
                </div>
              </div>
              <div className="article-container">
                <div className="article">
                  <br/>
                  <p>{article.body.body}</p>
                </div>
              </div>
            </div>
            :
            <div className="article-remote">
              <div className="article-hero">
                <div>
                  <Img className="full-screen-image" fluid={article.featuredImage.fluid} />
                  <div class="container">
                    <h2 className="title">{article.title}</h2>
                    <p>{article.description.description}</p>
                    <a className="button inverse" href={article.url}>View Article</a>
                  </div>
                </div>
              </div>
            </div>
          }
        </div> 
        

        

        {/* <div className="article-description">{article.description.description}</div> */}


        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}


        {/* <ul
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
        </ul> */}
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
      featuredImage {
        fluid(maxWidth: 1200) {
          src
        }
      }
      description {
        description
      }
      body {
        body
      }
      url
    }
  }
`

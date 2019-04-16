import React from "react"
import { Link, graphql } from "gatsby"
import TextTruncate from "react-text-truncate"
import Nav from "../components/navigation"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Contact from "../components/contact"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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
        <Nav />

        <section id="portfolio" className="portfolio">          
          <h2 className="title">Portfolio</h2>
          <h4 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <div className="portfolio-grid">
            {articles.map(({ node }) => {
              const title = node.title || node.slug
              return (
                <div key={node.slug}>
                  <div className="article-overlay">
                    <Img fixed={node.featuredImage.fixed} />
                    {/* <img src="https://source.unsplash.com/random" /> */}
                  </div>
                  <div className="article-content">
                    <span className="title">
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        {title}
                      </Link>                      
                    </span>
                    <span className="excerpt">
                      <TextTruncate
                          line={4}
                          truncateText="…"
                          text={node.description.description}
                      />                        
                    </span>
                    {/* <span className="view-on"><a href="#">View on Medium</a></span>               */}
                  </div>

                </div>
              )
            })}
          </div>
        </section>

        <Contact />
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
    allContentfulArticle( sort: { fields: [publishDate], order: [DESC] }) {
      edges {
        node {
          title
          slug
          description {
            description
          }
          featuredImage {
            fixed(width: 613) {
              src
            }
          }          
        }
      }
    }
  }
`
import React from "react"
import { Link, graphql } from "gatsby"

import Nav from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services"
import About from "../components/about"
import Contact from "../components/contact"


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

          <section className="portfolio">          
            <h2 className="title">Portfolio</h2>
            <h4 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <div className="portfolio-grid">
              {articles.map(({ node }) => {
                const title = node.title || node.slug
                return (
                  <div key={node.slug}>
                    <div className="article-overlay">
                      <img src="https://source.unsplash.com/random" />
                    </div>
                    <div className="article-content">
                      <span className="title">
                        <Link style={{ boxShadow: `none` }} to={node.slug}>
                          {title}
                        </Link>                      
                      </span>
                      <span className="excerpt">
                        {node.description.description}
                      </span>
                      <span className="view-on"><a href="#">View on Medium</a></span>              
                    </div>

                  </div>
                )
              })}
            </div>
          </section>
        <Services />
        <About />
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

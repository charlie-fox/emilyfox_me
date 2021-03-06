import React from 'react';
import { Link, graphql } from "gatsby"
import Nav from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  static defaultProps = {
    title: 'Contact',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Nav />      
        <section className="contact">
          <h2 className="title">{this.props.title}</h2>
          <p>{this.props.description}</p>
        </section>   
      </Layout>
    );
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
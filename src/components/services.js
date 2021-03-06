import React from 'react';
import Nav from "../components/navigation"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Services extends React.Component {
  static defaultProps = {
    title: 'Services',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  }

  render() {
    return (
      <section className="services">
        <h2 className="title">{this.props.title}</h2>
        <p>{this.props.description}</p>
      </section>      
    );
  }
}

export default Services

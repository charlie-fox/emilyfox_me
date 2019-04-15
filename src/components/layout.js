import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let hero

    if (location.pathname === rootPath) {
      hero = (
        <div>
          <section className="intro">
            <div className="hero-overlay"/>
            <div className="intro-panel">
              <h2 className="title">Emily Fox</h2>
              <h3 className="subtitle">Freelance Writer</h3>
              <a href="#" className="button">Contact Me</a>
            </div>
          </section>
        </div>  
      )
    }
    // else {
    //   hero = (
    //     <h3>
    //       header for article pages
    //     </h3>
    //   )
    // }
    return (
      <div>
        <hero>{hero}</hero>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout

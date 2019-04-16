import React from 'react';
import Sticky from "react-sticky-state"
import { Link } from "gatsby"

class Nav extends React.Component {
  static defaultProps = {
    title: 'Services',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  }

  render() {
    return (

      <Sticky>
        <div className="App-navigation">
          <div className="logo">
            <Link to="/#top">Emily Fox</Link>
          </div>
          <div className="links">
            <div><Link to="/#portfolio">Portfolio</Link></div>
            <div><Link to="/services">Services</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
          </div>
        </div>  
      </Sticky>

    );
  }
}

export default Nav

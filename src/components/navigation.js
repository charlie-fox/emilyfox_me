import React from 'react';
import Sticky from "react-sticky-state"

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
            Emily Fox
          </div>
          <div className="links">
            <div>Portfolio</div>
            <div>Services</div>
            <div>About</div>
            <div>Hire Emily</div>
          </div>
        </div>  
      </Sticky>

    );
  }
}

export default Nav

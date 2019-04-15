import React from 'react';

class Contact extends React.Component {
  static defaultProps = {
    title: 'Contact',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  }

  render() {
    return (
      <div>
        <section className="contact">
          <h2 className="title">{this.props.title}</h2>
          <p>{this.props.description}</p>
          <a href="#" className="button inverse">Say Hello</a>
        </section>         
      </div>
    );
  }
}

export default Contact

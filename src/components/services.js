import React from 'react';

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

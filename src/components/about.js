import React from 'react';

class About extends React.Component {
  static defaultProps = {
    title: 'About',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  }

  render() {
    return (
      <section className="about">
        <h2 className="title">{this.props.title}</h2>
        <svg width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="80.5" cy="80.5" r="80.5" fill="#A5142A"/>
        </svg>
        <p>{this.props.description}</p>
      </section>        
    );
  }
}

export default About

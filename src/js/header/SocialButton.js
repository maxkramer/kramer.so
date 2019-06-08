import React, { Component } from 'react';
import { Button } from 'grommet';
import PropTypes from 'prop-types';

export default class SocialButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <Button href={this.props.href} title={this.props.title}>{this.props.icon}</Button>;
  }
}

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

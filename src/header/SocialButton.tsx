import React, {Component} from 'react';
import {Button} from 'grommet';

export default class SocialButton extends Component<Props> {
  render() {
    return <Button href={this.props.href} title={this.props.title} icon={this.props.icon} hoverIndicator/>;
  }
}

interface Props {
  href: string,
  icon: any,
  title: string
}

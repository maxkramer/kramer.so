import React, { Component } from 'react';
import PageFooter from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import { Timestamp } from 'grommet';

export default class Footer extends Component {
  render() {
    return (<PageFooter justify={'center'}>
      <Paragraph>&copy; Max Kramer <Timestamp fields={['year']} value={new Date()} /></Paragraph>
    </PageFooter>);
  }
}

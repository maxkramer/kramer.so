import React, { Component } from 'react';

import {App, Box, Heading} from 'grommet';

import Footer from './footer/Footer';
import Header from './header/Header';
import TechnicalSkills from './technical-skills/TechnicalSkills';
import RecentProjects from './recent-projects/RecentProjects';

export default class BasicApp extends Component {
  render() {
    return (
      <App centered={false}>
        <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
          <Box alignSelf={'center'} pad={{ between: 'large', vertical: 'small' }}>
            <Header />
            <TechnicalSkills />
            <Heading tag={'h4'} uppercase={true}>I've helped to build</Heading>
          </Box>
          <Box full={"horizontal"}>
            <RecentProjects />
          </Box>
          <Footer />
        </Box>
      </App>
    );
  }
}

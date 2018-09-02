import React, {Component} from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Footer from './footer/Footer';
import Header from './header/Header';
import TechnicalSkills from "./technical-skills/TechnicalSkills";
import RecentProjects from "./recent-projects/RecentProjects";

export default class BasicApp extends Component {
  render() {
    return (
      <App>
        <Box pad={{horizontal: "medium"}}>
        <Box pad={{vertical: "medium"}}/>
        <Box pad={{between: "large", vertical: "small"}}>
          <Header/>
          <TechnicalSkills/>
          <RecentProjects/>
        </Box>
        <Footer/>
        </Box>
      </App>
    );
  }
}

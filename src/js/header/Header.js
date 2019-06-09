import React, {Component} from 'react';
import {Box, Headline, Heading} from "grommet";
import SocialButtonGroup from "../header/SocialButtonGroup";

class Header extends Component {
  render() {
    return (
      <Box direction={"column"}>
        <Heading>Hello. My name is Max Kramer.</Heading>
        <Heading tag={'h2'} size={"small"}>I’m an Engineering Lead at BCG Digital Ventures, Berlin.</Heading>
        <SocialButtonGroup/>
      </Box>
    );
  }
}

export default Header;
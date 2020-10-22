import React from 'react';
import {Box, Footer, grommet, Grommet, Heading, Text} from 'grommet';
import {css} from 'styled-components';
import Header from "./header/Header";
import About from "./about/About";
import RecentProjects from "./recent-projects/RecentProjects";

function App() {
  return (
    <Grommet theme={theme} full>
          <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
              <Box alignSelf={'center'} width={'xlarge'}>
                <Header />
                <About />
                <Heading level={3} size={'small'} margin={{top: 'large', bottom: 'large'}}>RECENT WORK</Heading>
              </Box>
            <RecentProjects />
            <Footer alignSelf={'center'} pad={{'top': 'large'}}>
              <Text textAlign={'center'}>© Max Kramer {new Date().getFullYear().toString()}</Text>
            </Footer>
          </Box>
    </Grommet>
  );
}

const theme = {
    global: grommet.global,
    button: grommet.button,
    heading: {
        weight: 300,
        letterSpacing: 1,
        extend: css({ 'letter-spacing': '0.05em' })
    },
};

export default App;

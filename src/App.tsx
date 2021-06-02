import React from 'react';
import {Box, Footer, grommet, Grommet, Heading, Text} from 'grommet';
import {css} from 'styled-components';
import Header from "./header/Header";
import About from "./about/About";
import RecentProjects from "./recent-projects/RecentProjects";
import './App.module.scss';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box pad={{horizontal: 'large', vertical: 'large'}}>
                <Box alignSelf={'center'} width={'xlarge'}>
                    <Header/>
                    <About/>
                    <Heading level={3} size={'small'} margin={{top: 'large', bottom: 'large'}}>RECENT WORK</Heading>
                </Box>
                <RecentProjects/>
                <Footer direction={"column"} alignSelf={'center'} pad={{'top': 'large'}}>
                    <Text textAlign={'center'}>© Max Kramer {new Date().getFullYear().toString()}</Text>
                    <Text size={"xsmall"}>
                        Favicon from <a href="https://freeicons.io/graphic-design-flat-icon-set/design-color-compass-icon-15180"
                                                           title="Freeicons.io">Freeicons.io</a>
                    </Text>
                </Footer>
                <script id="CookieDeclaration" src="https://consent.cookiebot.com/fe53820a-cf7b-4ecc-a2d4-261564eb079e/cd.js" type="text/javascript" async></script>
            </Box>
        </Grommet>
    );
}

const theme = {
    global: grommet.global,
    button: grommet.button,
    heading: {
        weight: 300,
        extend: css({'letter-spacing': '0.05em'})
    },
};

export default App;

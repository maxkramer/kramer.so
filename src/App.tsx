import React from 'react';
import {Box, Footer, grommet, Grommet, Main, Text} from 'grommet';
import {css} from 'styled-components';
import Header from "./header/Header";
import About from "./about/About";
import RecentWork from "./recent-work/RecentWork";
import './App.module.scss';

function App() {
    return (
        <Grommet theme={theme}>
            <Main pad={{horizontal: 'large', vertical: 'large'}}>
                <Box alignSelf={'center'} width={'xlarge'}>
                    <Header/>
                    <About/>
                    <RecentWork/>
                </Box>
                <Footer direction={"column"} alignSelf={'center'} margin={{'top': 'xlarge'}} pad={{bottom: 'small'}}>
                    <Text textAlign={'center'}>© Max Kramer {new Date().getFullYear().toString()}</Text>
                    <Text size={"xsmall"}>
                        Favicon from <a href="https://freeicons.io/graphic-design-flat-icon-set/design-color-compass-icon-15180"
                                                           title="Freeicons.io">Freeicons.io</a>
                    </Text>
                </Footer>
            </Main>
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

import React, {Component} from 'react';
import {Avatar, Box, Heading} from 'grommet';
import SocialButtonGroup from './SocialButtonGroup';
import Max from '../Max.webp'

class Header extends Component {
    render() {
        return (
            <Box alignSelf={'center'} direction={'column'}>
                <Avatar alignSelf={'center'} animation={'fadeIn'} size={'150px'} src={Max} />
                <SocialButtonGroup alignSelf={'center'} margin={{top: 'small'}} />
                <Box direction={'column'} margin={{top: 'medium'}}>
                    <Heading level={1} margin={{top: 'none', bottom: 'small'}} size={'medium'} a11yTitle={''}>Hello. My name is Max Kramer.</Heading>
                    <Heading level={2} margin={{ vertical: 'none'}} size={'small'}>I’m an Interim-CTO at BCG Digital Ventures, Berlin.</Heading>
                </Box>
            </Box>
        );
    }
}

export default Header;

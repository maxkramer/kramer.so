import React, {Component} from 'react';
import {Box, Heading, Image} from 'grommet';
import SocialButtonGroup from './SocialButtonGroup';
import Max from '../Max-small.webp'
import styles from "../App.module.scss"

class Header extends Component {
    render() {
        return (
            <Box alignSelf={'center'} direction={'column'}>
                <Image alignSelf={'center'} className={styles.avatar} src={Max} loading={'lazy'} a11yTitle={"Picture of Max Kramer"} />
                <SocialButtonGroup alignSelf={'center'} margin={{top: 'small', bottom: 'small'}} />
                <Box direction={'column'} margin={{top: 'medium'}}>
                    <Heading level={1} margin={{ vertical: 'none' }} size={'medium'}>Hello. My name is Max Kramer.</Heading>
                    <Heading level={2} margin={{ top: 'medium', bottom: 'medium'}} size={'small'}>I’m an Interim-CTO at BCG Digital Ventures, Berlin.</Heading>
                </Box>
            </Box>
        );
    }
}

export default Header;

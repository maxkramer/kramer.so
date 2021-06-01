import React, {Component} from 'react';
import {Box, Heading, Image } from 'grommet';
import SocialButtonGroup from './SocialButtonGroup';
import Max from '../Max.webp'
import styles from "../App.module.scss"

class Header extends Component {
    render() {
        return (
            <Box alignSelf={'center'} direction={'column'}>
                <Image alignSelf={'center'} className={styles.avatar} src={Max} loading={'lazy'} a11yTitle={"Picture of Max Kramer"} />
                <SocialButtonGroup alignSelf={'center'} margin={{top: 'small', bottom: 'small', horizontal: 'none'}} />
                <Box direction={'column'} margin={{top: 'medium'}}>
                    <Heading level={1} textAlign={"center"} margin={{ vertical: 'none' }} size={'medium'}>Hello. My name is Max Kramer.</Heading>
                    <Heading level={2} textAlign={"center"} fill={true} margin={{ top: 'medium', bottom: 'medium'}} size={'small'}>I’m an engineering leader and product builder, particularly excited about <strong>sustainability</strong>  and <strong>financial well-being</strong>. I'm based in Berlin, 🇩🇪.</Heading>
                </Box>
            </Box>
        );
    }
}

export default Header;

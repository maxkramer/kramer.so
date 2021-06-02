import React, {Component} from 'react';
import {Box, Heading, Image, Paragraph, Text} from 'grommet';
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
                    <Heading level={1} textAlign={'center'} margin={{ vertical: 'none' }} size={'medium'}>Hello. My name is Max Kramer.</Heading>
                    <Paragraph textAlign={'center'} fill margin={{ top: 'medium', bottom: 'none'}} size={'large'}>I’m an engineering leader and product builder, particularly excited about <strong>sustainability</strong>  and <strong>financial well-being</strong>.</Paragraph>
                    <Paragraph textAlign={'center'} fill margin={{ top: "small"}} size={"large"}>I'm based in Berlin, 🇩🇪.</Paragraph>
                </Box>
            </Box>
        );
    }
}

export default Header;

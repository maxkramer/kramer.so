import React, {Component} from 'react';
import {Box, Heading, Image, Paragraph } from 'grommet';
import SocialButtonGroup from './SocialButtonGroup';
import Max from '../Max-smaller.webp'
import styles from "../App.module.scss"

class Header extends Component {
    render() {
        return (
            <Box alignSelf={'center'} direction={'column'}>
                <Image alignSelf={'center'} className={styles.avatar} src={Max} loading={'lazy'} a11yTitle={"Picture of Max Kramer"} />
                <SocialButtonGroup alignSelf={'center'} margin={{top: 'small', bottom: 'small', horizontal: 'none'}} />
                <Box direction={'column'} margin={{top: 'large', bottom: 'large'}}>
                    <Heading level={1} textAlign={'center'} margin={{ vertical: 'none', bottom: 'medium' }} size={'medium'}>Hello. My name is Max Kramer.</Heading>
                    <Paragraph textAlign={'center'} fill margin={{ top: 'medium', bottom: 'none'}} size={'large'}>I’m an engineering leader and product builder, particularly excited about sustainability, financial wellbeing and diversity. Based in Berlin 🇩🇪, I'm the CTO of <a href={'https://joinvitamin.com'}>Vitamin</a>, where we're using tech-for-good to power strong financial futures for all women.</Paragraph>
                </Box>
            </Box>
        );
    }
}

export default Header;

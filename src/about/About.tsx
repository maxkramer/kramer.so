import React, {Component} from 'react';
import {Box, Heading, Paragraph} from 'grommet';

export default class About extends Component {
    render() {
        return (
            <Box>
                <Heading level={2} size={'small'} margin={{top: 'large', bottom: 'small'}}>ABOUT ME</Heading>
                <Paragraph fill={true}>I have been working in the engineering space for over 8-years, specialising in solutions architecture, distributed systems, cloud-infrastructure (AWS, GCP, Azure, Terraform) and mobile development (iOS, React Native).</Paragraph>
                <Paragraph fill={true}>I am typically responsible for building and running
                    high-performant engineering teams and contributing on a strategic / operations level, having recently worked as a venture-CTO at the company-builder arm of the Boston
                    Consulting Group (BCG) and co-founding a startup of my own (WEAL).</Paragraph>
                <Paragraph fill={true}>With a keen eye for design and a love for product, I
                    get the most excited building B2C and B2B products with a clear value to the end-user. Together with Product, I am a firm believer in design-thinking and testing hypotheses to develop product-market fit, while watching this come to life!</Paragraph>
            </Box>
        );
    }
}

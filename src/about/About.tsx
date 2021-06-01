import React, {Component} from 'react';
import {Box, Heading, Paragraph} from 'grommet';

export default class About extends Component {
    render() {
        return (
            <Box>
                <Heading level={3} size={'small'} margin={{top: 'large', bottom: 'small'}}>DAY TO DAY</Heading>
                <Paragraph fill={true}>Recently working as a venture-CTO at the company-builder arm of the Boston
                    Consulting Group (BCG) and a startup of my own, I am typically responsible for building and running
                    high-performant engineering teams and contributing on a strategic / operations level.</Paragraph>
                <Paragraph fill={true}>With a keen eye for design and a love for product, I
                    get the most excited building B2C and B2B products with the user-first. Together with Product, I am a firm believer in design-thinking and testing hypotheses to confirm product-market fit and seeing this value come to life!</Paragraph>
                <Paragraph fill={true}>I have been working in the engineering space for over 8-years, specialising in distributed systems, solutions architecture, cloud-infrastructure (AWS, GCP, Azure, Terraform) and mobile development.</Paragraph>
            </Box>
        );
    }
}

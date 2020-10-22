import React, {Component} from 'react';
import {Box, Heading, Paragraph} from 'grommet';

export default class About extends Component {
    render() {
        return (
            <Box>
                <Heading level={3} size={'small'} margin={{top: 'large', bottom: 'small'}}>DAY TO DAY</Heading>
                <Paragraph fill={true}>As an Interim CTO at the company-builder arm of the Boston
                    Consulting Group (BCG), I am responsible for developing and running
                    high-performant engineering teams and contributing to our
                    cross-functional startup teams on a strategic level.</Paragraph>
                <Paragraph fill={true}>With a keen eye for design and a strong MVP-first mindset, I
                    maintain a strong interest in building successful B2C and B2B products
                    with the consumer in mind, working alongside product, I am a firm
                    believer in design-thinking and testing hypotheses to confirm
                    product-market fit.</Paragraph>
                <Paragraph fill={true}>I have been working in the engineering space for over 8-years, specialising in distributed systems, solutions architecture, cloud-infrastructure (AWS, GCP, Azure, Terraform) and mobile development.</Paragraph>
            </Box>
        );
    }
}

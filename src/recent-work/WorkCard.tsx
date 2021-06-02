import React, {Component} from 'react';
import {Anchor, Box, Heading, Image, Paragraph} from 'grommet';

export default class WorkCard extends Component<Props> {
  render() {
    return (
      <Box border={{ size: 'small', side: 'all', color: 'light-1'}}>
        <Box alignSelf={'center'} height={'small'} pad={{vertical: 'large'}} direction={"column"}>
            <Anchor a11yTitle={this.props.link} href={this.props.link} icon={
                <Image fit={"cover"} width={'150px'} alignSelf={"center"} decoding={"async"} loading={'lazy'} className={this.props.imageClass} src={this.props.imageSrc} alt={this.props.subtitle}/>
            } />
        </Box>
        <Box width={'large'} alignSelf={'center'} direction={'column'} pad={{bottom: 'small'}}>
            <Heading level={4} margin={{top: 'xsmall', bottom: 'none', horizontal: 'medium'}}><Anchor href={this.props.link}>{this.props.subtitle}</Anchor></Heading>
            <Heading level={5} margin={{top: 'none', bottom: 'medium', horizontal: 'medium'}}>{this.props.header}</Heading>
            {this.props.description.map((description, index) => (
                <Paragraph fill key={index} margin={{horizontal: 'medium'}}>{description}</Paragraph>
            ))}
        </Box>
      </Box>
    );
  }
}

interface Props {
  imageSrc: string
  imageClass?: string
  header: string
  subtitle: string
  description: any[]
  link: string
}

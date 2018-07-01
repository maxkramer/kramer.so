import React, { Component } from 'react';
import { Anchor, Box, Card, Distribution, Image, Label, Paragraph, Tile } from 'grommet';
import PropTypes from 'prop-types';
import LearnMoreIcon from 'grommet/components/icons/base/FormNextLink';

export default class RecentProject extends Component {
  render() {
    return (<Tile pad={{vertical: 'large'}}>
      <Card
        thumbnail={<Box direction={'row'} alignSelf={'center'} size={'small'} basis={'xsmall'}><Image src={this.props.imageSrc} /></Box>}
        heading={this.props.header}
        label={this.props.subtitle}
        textSize={'small'}
        description={<Box pad={{ between: 'small' }}>
          {this.props.description.map(description => (<Paragraph>{description}</Paragraph>))}
        </Box>}>
        <Box pad={{ vertical: 'medium' }}><Anchor label={<Label>Visit Website</Label>} icon={<LearnMoreIcon />} href={this.props.link} /></Box>
        <Distribution series={this.props.distributionSeries} units={'%'} />
      </Card>
    </Tile>);
  }
}

RecentProject.propTypes = {
  distributionSeries: PropTypes.array.isRequired,
  imageSrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.element.isRequired
};

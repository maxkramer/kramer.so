import React, { Component } from 'react';
import { Anchor, Box, Card, Image, Label, Paragraph, Tile } from 'grommet';
import PropTypes from 'prop-types';
import LearnMoreIcon from 'grommet/components/icons/base/FormNextLink';

export default class RecentProject extends Component {
  render() {
    return (
      <Card
        thumbnail={
          <Box pad={{vertical: 'large'}} direction={'row'} alignSelf={'center'} size={'small'} basis={'xsmall'}>
            <Anchor a11yTitle={this.props.link} href={this.props.link}>
              <Image src={this.props.imageSrc} fit={'contain'} alt={this.props.subtitle} />
            </Anchor>
          </Box>
        }
        heading={this.props.header}
        label={this.props.subtitle}
        textSize={'small'}
        description={
          <Box pad={{ between: 'small' }}>
            {this.props.description.map(description => (<Paragraph key={Math.random()}>{description}</Paragraph>))}
          </Box>}>
      </Card>
    );
  }
}

RecentProject.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired
};

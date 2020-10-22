import React, {Component} from 'react';
import SocialButton from './SocialButton';
import {Github, Linkedin, Mail, Medium, Twitter} from 'grommet-icons'
import {Box} from 'grommet';
import {AlignSelfType, MarginType} from "grommet/utils";

const twitterUrl = process.env.REACT_APP_TWITTER_URL as string;
const githubUrl = process.env.REACT_APP_GITHUB_URL as string;
const linkedInUrl = process.env.REACT_APP_LINKED_IN_URL as string;
const emailUrl = process.env.REACT_APP_EMAIL_URL as string;
const mediumUrl = process.env.REACT_APP_MEDIUM_URL as string;

class SocialButtonGroup extends Component<Props> {
  render() {
    return (
      <Box direction={'row'} alignSelf={this.props.alignSelf} margin={this.props.margin}>
        <SocialButton href={twitterUrl} title='@UINT_MAX on Twitter'
                      icon={<Twitter/>}/>
        <SocialButton href={linkedInUrl} title='LinkedIn'
                      icon={<Linkedin/>}/>
        <SocialButton href={mediumUrl} title='Medium Blog'
                      icon={<Medium/>}/>
        <SocialButton href={githubUrl} title='@maxkramer on Github'
                      icon={<Github/>}/>
        <SocialButton href={emailUrl} title='Email Me' icon={<Mail/>}/>
      </Box>
    );
  }
}

interface Props {
    margin?: MarginType
    alignSelf?: AlignSelfType
}

export default SocialButtonGroup;

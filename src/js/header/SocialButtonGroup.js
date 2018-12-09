import React, { Component } from 'react';
import SocialButton from './SocialButton';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin';
import MailIcon from 'grommet/components/icons/base/SocialMail';
import CameraIcon from 'grommet/components/icons/base/Camera';
import MediumIcon from 'grommet/components/icons/base/SocialMedium';
import { Box } from 'grommet';

const twitterUrl = process.env.TWITTER_URL;
const githubUrl = process.env.GITHUB_URL;
const flickrUrl = process.env.FLICKR_URL;
const linkedInUrl = process.env.LINKED_IN_URL;
const emailUrl = process.env.EMAIL_URL;
const mediumUrl = process.env.MEDIUM_URL;

class SocialButtonGroup extends Component {
  render() {
    return (
      <Box direction={'row'} responsive={false} pad={{ between: 'small' }} >
        <SocialButton href={twitterUrl} title='@UINT_MAX on Twitter' icon={<TwitterIcon />} />
        <SocialButton href={linkedInUrl} title='LinkedIn' icon={<LinkedInIcon />} />
        <SocialButton href={mediumUrl} title='Medium Blog' icon={<MediumIcon />} />
        <SocialButton href={githubUrl} title='@maxkramer on Github' icon={<GithubIcon />} />
        <SocialButton href={flickrUrl} title='Flickr Portfolio' icon={<CameraIcon />} />
        <SocialButton href={emailUrl} title='Email Me' icon={<MailIcon />} />
      </Box>
    );
  }
}

export default SocialButtonGroup;

import React, { Component } from 'react';
import SocialButton from './SocialButton';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin';
import MailIcon from 'grommet/components/icons/base/SocialMail';
import CameraIcon from 'grommet/components/icons/base/Camera';
import { Box } from 'grommet';

const twitterUrl = process.env.TWITTER_URL;
const githubUrl = process.env.GITHUB_URL;
const flickrUrl = process.env.FLICKR_URL;
const linkedInUrl = process.env.LINKED_IN_URL;
const emailUrl = process.env.EMAIL_URL;

class SocialButtonGroup extends Component {
  render() {
    return (
      <Box direction={'row'} pad={{ between: 'small' }} >
        <SocialButton href={linkedInUrl} icon={<LinkedInIcon />} />
        <SocialButton href={githubUrl} icon={<GithubIcon />} />
        <SocialButton href={twitterUrl} icon={<TwitterIcon />} />
        <SocialButton href={flickrUrl} icon={<CameraIcon />} />
        <SocialButton href={emailUrl} icon={<MailIcon />} />
      </Box>
    );
  }
}

export default SocialButtonGroup;

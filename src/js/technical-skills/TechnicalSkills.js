import React, { Component } from 'react';
import { Heading, List, ListItem } from 'grommet';

export default class TechnicalSkills extends Component {
  render() {
    return (
      <article>
        <Heading tag={'h4'} uppercase={true}>Technical skills</Heading>
        <List>
          <ListItem>Expertise in micro-services architecture, large-scale backend web-development and CI/CD pipelines</ListItem>
          <ListItem>Strong dev-ops skills with AWS services running with Terraform</ListItem>
          <ListItem>6 years commercial iOS experience in both Objective-C and Swift</ListItem>
          <ListItem>Team lead experience through mentoring and training junior engineers</ListItem>
          <ListItem>Substantial interest in software-design and application architecture patterns</ListItem>
        </List>
      </article>
    );
  }
}

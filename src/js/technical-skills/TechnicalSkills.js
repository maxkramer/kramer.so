import React, { Component } from 'react';
import { Heading, List, ListItem } from 'grommet';

export default class TechnicalSkills extends Component {
  render() {
    return (
      <article>
        <Heading tag={'h4'} uppercase={true}>Technical skills</Heading>
        <List>
          <ListItem>Expertise in micro-services architecture, large-scale backend web-development and CI/CD pipelines</ListItem>
          <ListItem>Strong infrastructure skills, working with Kubernetes on AWS (Kops) and Google Cloud (GKE). Infrastructure as code with Terraform </ListItem>
          <ListItem>Substantial proficiency in Spring Boot (and relevant frameworks) with Kotlin and Java</ListItem>
          <ListItem>6 years commercial iOS development experience in both Objective-C and Swift</ListItem>
        </List>
      </article>
    );
  }
}

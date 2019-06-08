import React, { Component } from 'react';
import { Heading, List, ListItem } from 'grommet';

export default class TechnicalSkills extends Component {
  render() {
    return (
      <article>
        <Heading tag={'h4'} uppercase={true}>ABOUT</Heading>
        <List>
          <ListItem>Team lead accountable for delivery and driving product and architectural decisions</ListItem>
          <ListItem>Responsible for managing stakeholders, presenting tech to corporate-partners, and ensuring team happiness</ListItem>
          <ListItem>Expertise as solutions-architect with significant experience in systems-design and backend technologies</ListItem>
          <ListItem>Strong infrastructure skills as a Kubernetes Administrator on AWS and Google Cloud (GKE). Infrastructure as code with Terraform</ListItem>
          <ListItem>Significant proficiency in Spring Boot (and relevant frameworks) with Kotlin and Java. Experienced with Golang, Ruby and JS</ListItem>
          <ListItem>6 years experience as a commercial mobile-development lead with both iOS and Android</ListItem>
        </List>
      </article>
    );
  }
}

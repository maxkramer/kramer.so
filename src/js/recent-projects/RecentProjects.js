import React, { Component } from 'react';
import { Box, Heading, Tiles } from 'grommet';
import RecentProject from './RecentProject';

export default class RecentProjects extends Component {
  render() {
    return (
      <Box pad={{ between: 'medium' }}>
        <Heading tag={'h4'} uppercase={true}>Recent Projects</Heading>
        <Tiles direction={'row'} pad={{ between: 'medium' }}>
          <RecentProject imageSrc={'/img/Nexure_Logo_RGB_SerenityBlue.svg'}
            header={'Backend and Infrastructure Lead'}
            subtitle={'Nexure AG'}
            link={'https://www.linkedin.com/company/nexure'}
            description={[
              'Nexure was an exciting project developed for Electrolux AB in the B2C sector. It involved creating a\n' +
              'consumer-facing website to improve the sales of extended warranties, as well as scaling-related challenges integrating\n' +
              'Electrolux\'s services to scale their products to different markets.',
              'I lead the infrastructure involving running a Kubernetes cluster, designing, data-streaming architectures to improve our machine learning models, and managing the development of our backend services.'
            ]} />
          <RecentProject imageSrc={'/img/heycar.svg'}
            header={'Senior Engineer'}
            subtitle={'HeyCar'}
            link={'https://hey.car'}
            description={[
              'HeyCar combines the best dealers and the best cars without hosting advertorials. Their\n' +
              '                      aim was to tackle this market and to become one of the leading players in DACH region very\n' +
              '                      fast.',
              'At HeyCar, I implemented various backend micro-services in Java 8/Kotlin with Spring\n' +
              '                      Boot, all running within a Kubernetes cluster on AWS, managed by Terraform.', '', ''
            ]} />
          <RecentProject imageSrc={'/img/coup.svg'}
            header={'iOS Engineer'}
            subtitle={'COUP Mobility'}
            link={'https://joincoup.com'}
            description={[
              'At COUP, I played an integral part of the venture, leading the development of the iOS app and supporting the Android.',
              'This involved implementing the client-side hardware (iOS → Scooter) interaction as well as taking a driving-role' +
              ' in designing the architecture of the application to ensure a modular and testable codebase using VIPER.',
              'I also lead the development of the "back-office" application which drastically improved\n' +
              '                      the efficiency of our fleet management, by\n' +
              '                      providing our fleet engineers the means to quickly scooter related issues, and simplistically\n' +
              '                      manage their tasks.'
            ]} />
        </Tiles>
      </Box>
    );
  }
}

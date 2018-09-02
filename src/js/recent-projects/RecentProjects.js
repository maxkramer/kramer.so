import React, { Component } from 'react';
import {Box, Heading, Tiles} from 'grommet';
import RecentProject from './RecentProject';

export default class RecentProjects extends Component {
  render() {
    return (
      <Box pad={{ between: 'medium' }}>
        <Heading tag={'h4'} uppercase={true}>Recent Projects</Heading>
        <Tiles direction={'row'} pad={{ between: 'medium' }}>
          <RecentProject distributionSeries={[
            { label: 'Microservices in Java / Kotlin with Spring Boot', value: 40, colorIndex: 'graph-1' },
            { label: 'Infrastructure', value: 30, colorIndex: 'graph-2' },
            { label: 'Team Leadership', value: 30, colorIndex: 'graph-3' }]}
            imageSrc={'/img/bcgdv.svg'}
          header={'Backend and Infrastructure Lead'}
          subtitle={'Confidential'}
            link={'https://bcgdv.com'}
            description={[
            'I am currently working on an exciting project in the B2C sector. This involves creating a\n' +
                           'consumer-facing website to sell our product, as well as scaling-related challenges integrating\n' +
                           'with our corporate partner\'s services to scale our' +
                           ' product to different markets.',
            'I am leading the infrastructure involving running a Kubernetes cluster, designing\n' +
                           '                      data-streaming architectures to improve our machine learning models, and managing the development\n' +
                           '                      of our backend services.'
          ]} />
          <RecentProject distributionSeries={[
            { label: 'Microservices in Java / Kotlin with Spring' + ' Boot', value: 70, colorIndex: 'graph-1' },
            { label: 'Infrastructure', value: 20, colorIndex: 'graph-2' },
            { label: 'Golang', value: 10, colorIndex: 'graph-3' }]}
          imageSrc={'/img/heycar.svg'}
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
          <RecentProject distributionSeries={[
            { label: 'Swift', value: 70, colorIndex: 'graph-1' },
            { label: 'Core Bluetooth - BLE 4.0', value: 20, colorIndex: 'graph-2' },
            { label: 'Fastlane and Travis CI', value: 10, colorIndex: 'graph-3' }]}
            imageSrc={'/img/coup.svg'}
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

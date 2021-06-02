import React from 'react';
import {Grid, Heading, ResponsiveContext, Box } from 'grommet';
import WorkCard from './WorkCard';
import styles from '../App.module.scss';

export default function RecentWork() {
    const size = React.useContext(ResponsiveContext);
    const sizeMappings: { [size: string]: number } = {
        'xsmall': 1,
        'small': 1,
        'medium': 2,
        'large': 3,
        'xlarge': 3
    }

    return (
        <Box>
            <Box pad={{vertical: 'xsmall'}} alignSelf={'center'} width={'xlarge'}>
                <Heading level={2} size={'small'} margin={{top: 'large', bottom: 'large'}}>RECENT WORK</Heading>
            </Box>
            <Grid columns={{count: sizeMappings[size] ?? 3, size: 'flex'}} gap={'small'}>
                <WorkCard imageSrc={'/img/alike.svg'}
                          header={'Engineering and Product Advisor'}
                          subtitle={'Alike'}
                          imageClass={styles.hoverImage}
                          link={'https://alike.org.uk'}
                          description={[
                              'Alike is a social network for cancer-patients and survivors to share their journeys and combat isolation by finding people who are going through similar circumstances to them.',
                              'Since 2019, I have been supporting Alike on all engineering and product topics, having built the native iOS application and backend stack pro-bono in my free-time. Alike is a very personal connection to me, having lost a very close friend to cancer, with Alike existing as his legacy.'
                          ]}/>
                <WorkCard imageSrc={'/img/weal.svg'}
                          header={'Co-Founder / CTO'}
                          subtitle={'WEAL'}
                          imageClass={styles.hoverImage}
                          link={'https://weal.io'}
                          description={[
                              'Mid-2020, alongside two other co-founders, I co-founded WEAL; the platform for employees to improve their financial well-being, with this being one of the leading causes of stress and mental fatigue across the workforce.',
                              'Our mission was to provide better financial products to those who were most in need and provide them with the education necessary to improve their financial situation, starting with the workplace-pension (bAV).'
                          ]}/>
                <WorkCard imageSrc={'/img/bcgdv.svg'}
                          header={'Venture CTO'}
                          subtitle={'Safe@Work (S@W)'}
                          imageClass={styles.hoverImage}
                          link={'https://medium.com/bcg-digital-ventures/s-w-a-solution-to-help-companies-to-manage-the-post-covid-19-return-to-work-894316db9e23'}
                          description={[
                              'In co-operation with BCG, I lead the engineering team of a B2B on-premise solution aiming to help companies ramp up after lockdown, protecting the health and safety of their employees by reducing the risk of new COVID-19 virus outbreaks at work.',
                              'As Venture-CTO, I was responsible for the engineering-team, sales-pitches with clients and supporting the team with architectural discussions and technical leadership.'
                          ]}/>
                <WorkCard imageSrc={'/img/opensc.svg'}
                          header={'Venture CTO'}
                          imageClass={[styles.invertColor, styles.hoverImage].join(' ')}
                          subtitle={'OpenSC'}
                          link={'https://opensc.org'}
                          description={[
                              'OpenSC is a new blockchain-enabled food tracking platform developed in partnership between WWF-Australia and BCG Digital Ventures.',
                              'OpenSC uses cutting edge technology to track individual products from origin to consumer. The aim is to help businesses and consumers avoid illegal, environmentally damaging or unethical products, while improving supply chain accountability and transparency.',
                              'As Venture-CTO, I was responsible for the Berlin product-team (Engineering, Data Science, Product), interfacing and solutions architecture for clients, and hiring.'
                          ]}/>
                <WorkCard imageSrc={'/img/up42.svg'}
                          header={'Lead Engineer'}
                          subtitle={'UP42'}
                          imageClass={styles.hoverImage}
                          link={'https://up42.com'}
                          description={[
                              'UP42 is an open platform and marketplace dedicated to helping developers and startups build, run, and scale geospatial products. UP42 opens up access to geospatial data, imagery, and processing algorithms — allowing users to develop, launch, and monetise game-changing new products',
                              'I lead the engineering team to develop a scalable and secure system that would support a large number of user\'s running their machine-learning algorithms against our satellite data at once. We leveraged the Google Cloud Platform and Kubernetes to deal with these issues.'
                          ]}/>
                <WorkCard imageSrc={'/img/nexure.svg'}
                          header={'Lead Engineer'}
                          subtitle={'Nexure AG'}
                          imageClass={styles.hoverImage}
                          link={'https://www.linkedin.com/company/nexure'}
                          description={[
                              'Nexure was an exciting project developed for Electrolux AB in the B2C sector. It involved creating a\n' +
                              'consumer-facing website to improve the sales of extended warranties, as well as scaling-related challenges integrating\n' +
                              'Electrolux\'s services to scale their products to different markets.',
                              'I lead the infrastructure involving running a Kubernetes cluster, designing, data-streaming architectures to improve our machine learning models, and managing the development of our backend services.'
                          ]}/>
                <WorkCard imageSrc={'/img/heycar.svg'}
                          header={'Senior Engineer'}
                          subtitle={'HeyCar'}
                          link={'https://hey.car'}
                          imageClass={styles.hoverImage}
                          description={[
                              'HeyCar combines the best dealers and the best cars without hosting advertorials. Their aim was to tackle this market and to become one of the leading players in DACH region very fast',
                              'At HeyCar, I implemented various backend micro-services in Java 8/Kotlin with Spring Boot, all running within a Kubernetes cluster on AWS, managed by Terraform.'
                          ]}/>
                <WorkCard imageSrc={'/img/coup.svg'}
                          header={'iOS Engineer'}
                          subtitle={'COUP Mobility'}
                          link={'https://de.wikipedia.org/wiki/Coup_(Unternehmen)'}
                          imageClass={styles.hoverImage}
                          description={[
                              'At COUP, I played an integral part of the venture, leading the development of the iOS app and supporting the Android.',
                              'This involved implementing the client-side hardware (iOS → Scooter) interaction as well as taking a driving-role in designing the architecture of the application to ensure a modular and testable codebase using VIPER.',
                              'I also lead the development of the "back-office" application which drastically improved the efficiency of our fleet management, by providing our fleet engineers the means to quickly scooter related issues, and simplistically manage their tasks.'
                          ]}/>
            </Grid>
        </Box>
    );
}

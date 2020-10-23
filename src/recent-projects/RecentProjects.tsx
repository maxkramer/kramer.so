import React from 'react';
import {Anchor, Grid, ResponsiveContext} from 'grommet';
import RecentProject from './RecentProject';
import styles from '../App.module.scss';

export default function RecentProjects() {
    let size = React.useContext(ResponsiveContext);
    const smallerSizes = ['xsmall', 'small'];
    if (smallerSizes.indexOf(size) === -1) {
      size = 'medium';
    }
    return (
        <Grid columns={size} gap={'small'}>
          <RecentProject imageSrc={'/img/bcgdv.svg'}
                         header={'Interim CTO'}
                         subtitle={'Safe@Work (S@W)'}
                         imageClass={ styles.hoverImage }
                         link={'https://medium.com/bcg-digital-ventures/s-w-a-solution-to-help-companies-to-manage-the-post-covid-19-return-to-work-894316db9e23'}
                         description={[
                           'In co-operation with BCG, I lead the development of a solution that helps companies ramp up after lockdown, protecting the health and safety of their employees and supporting them to reduce the risk of new (COVID-19) virus outbreaks at work.',
                           <Anchor
                             href={'https://medium.com/bcg-digital-ventures/s-w-a-solution-to-help-companies-to-manage-the-post-covid-19-return-to-work-894316db9e23'}>https://medium.com/bcg-digital-ventures/s-w-a-solution-to-help-companies-to-manage-the-post-covid-19-return-to-work-894316db9e23</Anchor>
                         ]}/>
          <RecentProject imageSrc={'/img/opensc.svg'}
                         header={'Interim CTO'}
                         imageClass={[styles.invertColor, styles.hoverImage].join(' ')}
                         subtitle={'OpenSC'}
                         link={'https://opensc.org'}
                         description={[
                           'OpenSC is a new blockchain-enabled food tracking platform developed in partnership between WWF-Australia and BCG Digital Ventures.',
                           'OpenSC uses cutting edge technology to track individual products from origin to consumer. The aim is to help businesses and consumers avoid illegal, environmentally damaging or unethical products, while improving supply chain accountability and transparency.'
                         ]}/>
          <RecentProject imageSrc={'/img/up42.svg'}
                         header={'Lead Engineer'}
                         subtitle={'UP42'}
                         imageClass={styles.hoverImage}
                         link={'https://up42.com'}
                         description={[
                           'UP42 is an open platform and marketplace dedicated to helping developers and startups build, run, and scale geospatial products. UP42 opens up access to geospatial data, imagery, and processing algorithms — allowing users to develop, launch, and monetise game-changing new products',
                           'I lead the engineering team to develop a scalable and secure system that would support a large number of user\'s running their machine-learning algorithms against our satellite data at once. We leverage the Google Cloud Platform and Kubernetes to deal with these issues.'
                         ]}/>
          <RecentProject imageSrc={'/img/nexure.svg'}
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
          <RecentProject imageSrc={'/img/heycar.svg'}
                         header={'Senior Engineer'}
                         subtitle={'HeyCar'}
                         link={'https://hey.car'}
                         imageClass={styles.hoverImage}
                         description={[
                           'HeyCar combines the best dealers and the best cars without hosting advertorials. Their aim was to tackle this market and to become one of the leading players in DACH region very fast',
                           'At HeyCar, I implemented various backend micro-services in Java 8/Kotlin with Spring Boot, all running within a Kubernetes cluster on AWS, managed by Terraform.'
                         ]}/>
          <RecentProject imageSrc={'/img/coup.svg'}
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
    );
}

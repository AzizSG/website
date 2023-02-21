import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3><Translate>Urban Areas</Translate></h3>
              <p>
                <Translate>
                  Micromobility is generally used to describe small vehicles that can seamlessly 
                  navigate highly populated urban areas.
                </Translate>
              </p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3><Translate>Micromobility Solutions</Translate></h3>
              <p>
                <Translate>
                  Micromobility solutions have become a hot topic as cities across the globe focus on 
                  leveraging technology for the purposes of increasing sustainability
                </Translate>
              </p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3><Translate>Future of Micromobility</Translate></h3>
              <p>
                <Translate>
                  The electric scooter industry has expanded significantly in just a few years 
                  and the future outlook is impressive.
                </Translate>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

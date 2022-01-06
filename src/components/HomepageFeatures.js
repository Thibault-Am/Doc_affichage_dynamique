import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Objectif',
    Svg: require('../../static/img/affichage.svg').default,
    description: (
      <>
        L’objectif de ce projet est la mise en œuvre d’une solution d’affichage dynamique.
        Cette solution permet de gérer un groupe d’écrans sur lesquels on choisit d’afficher des informations.
      </>
    ),
  },
  {
    title: 'Le but',
    Svg: require('../../static/img/engrenage.svg').default,
    description: (
      <>
        Le principe est que chaque écran est connecté au réseau. Ils sont équipé d’un système intelligent sur lequel une application accède aux informations à travers le réseau. Les informations sont affichées sur l’écran
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/cleemolette.svg').default,
    description: (
      <>
        Pour réaliser le projet, nous avons donc utilisé plusieurs langages pour développer ce systeme. Toute les informations se trouve dans la documentation.
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
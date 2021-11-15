import React from 'react';
import styles from './Hero.module.scss';

type HeroProps = {
  heroImage: string
};

const Hero = ({ heroImage }: HeroProps) => (
  <div className={styles.container}>
    <img className={styles.heroImage} src={heroImage} alt="" />
    <section className={styles.innerContent}>
      <p>Title</p>
      <p>some info</p>
      <button type="button">Test</button>
    </section>
  </div>
);

export default Hero;

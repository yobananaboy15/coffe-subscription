import React from 'react';
import styles from './Hero.module.scss';

type HeroProps = {
  heroImage: string
};

const Hero = ({ heroImage }: HeroProps) => (
  <div>
    <img className={styles.heroImage} src={heroImage} alt="" />
  </div>
);

export default Hero;

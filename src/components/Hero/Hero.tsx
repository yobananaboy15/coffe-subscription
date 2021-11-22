import React from 'react';
import styles from './Hero.module.scss';
import MobileMenu from '../MobileMenu/MobileMenu';

type HeroProps = {
  heroImage: string,
  children: any
};

const Hero = ({ heroImage, children }: HeroProps) => (
  <div className={styles.container}>
    <MobileMenu />
    <img className={styles.heroImage} src={heroImage} alt="" />
    <div className={styles.innerContent}>
      {children}
    </div>
  </div>
);

export default Hero;

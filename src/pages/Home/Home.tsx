import React from 'react';
import Hero from '../../components/Hero/Hero';
import ImageLg from '../../assets/home/desktop/image-hero-coffeepress.jpg';
import ImageMd from '../../assets/home/tablet/image-hero-coffeepress.jpg';
import ImageSm from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import useViewport from '../../hooks/useViewport';
import selectImage from '../../utils/selectImage';
import styles from './Home.module.scss';

const Home = () => {
  const { width } = useViewport();
  const heroImage = selectImage(width, { ImageSm, ImageMd, ImageLg });
  return (
    <div>
      <Hero heroImage={heroImage}>
        <h2 className={styles.title}>Great coffee made simple</h2>
        <span className={styles.info}>
          Start your mornings with the world’s best coffees. Try our expertly curated artisan
          coffees from our best roasters delivered directly to your door, at your schedule.
        </span>
        <button type="button">Test</button>
      </Hero>
    </div>
  );
};

export default Home;

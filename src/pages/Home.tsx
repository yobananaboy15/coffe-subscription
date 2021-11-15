import React from 'react';
import Hero from '../components/Hero/Hero';
import ImageLg from '../assets/home/desktop/image-hero-coffeepress.jpg';
import ImageMd from '../assets/home/tablet/image-hero-coffeepress.jpg';
import ImageSm from '../assets/home/mobile/image-hero-coffeepress.jpg';
import useViewport from '../hooks/useViewport';
import selectImage from '../utils/selectImage';

const Home = () => {
  const { width } = useViewport();
  const heroImage = selectImage(width, { ImageSm, ImageMd, ImageLg });
  return (
    <div>
      <Hero heroImage={heroImage} />
    </div>
  );
};

export default Home;

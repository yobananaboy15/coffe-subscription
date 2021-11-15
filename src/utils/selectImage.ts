import breakpoints from '../constants';

type HeroKeys = 'ImageSm' | 'ImageMd' | 'ImageLg';
type HeroImages = Record<HeroKeys, string>;

const selectImage = (width: number, imageObject: HeroImages) => {
  if (width <= breakpoints.sm) {
    return imageObject.ImageSm;
  } if (width <= breakpoints.md) {
    return imageObject.ImageMd;
  }
  return imageObject.ImageLg;
};

export default selectImage;

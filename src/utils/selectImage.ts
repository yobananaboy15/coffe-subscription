import breakpoints from '../constants';

type HeroKeys = 'ImageSm' | 'ImageMd' | 'ImageLg';
type HeroImages = Record<HeroKeys, string>;

const selectImage = (width: number, imageObject: HeroImages) => {
  if (width >= breakpoints.md) {
    return imageObject.ImageLg;
  }
  if (width >= breakpoints.sm) {
    return imageObject.ImageMd;
  }
  return imageObject.ImageSm;
};

export default selectImage;

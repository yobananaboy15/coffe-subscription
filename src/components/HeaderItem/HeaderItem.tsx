import React from 'react';
import { Link } from 'react-router-dom';

export const items = [
  { text: 'Home', link: '/' },
  { text: 'About us', link: '/about' },
  { text: 'Create your plan', link: '/subscription' },
] as const;

type HeaderItemProps = {
  itemDetails: typeof items[number]
};

const HeaderItem = ({ itemDetails } : HeaderItemProps) => (
  <div>
    <Link to={itemDetails.link}>{itemDetails.text}</Link>
  </div>
);

export default HeaderItem;

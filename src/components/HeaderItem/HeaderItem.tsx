import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderItem.module.scss';

export const items = [
  { text: 'Home', link: '/' },
  { text: 'About us', link: '/about' },
  { text: 'Create your plan', link: '/subscribe' },
] as const;

type HeaderItemProps = {
  itemDetails: typeof items[number]
};

const HeaderItem = ({ itemDetails }: HeaderItemProps) => (
  <div className={styles.item}>
    <Link to={itemDetails.link}>{itemDetails.text.toUpperCase()}</Link>
  </div>
);

export default HeaderItem;

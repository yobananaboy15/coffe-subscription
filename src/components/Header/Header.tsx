import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderItem, { items } from '../HeaderItem/HeaderItem';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <HeaderLogo />
    <div className={styles.headerItemsContainer}>
      {items.map((item) => <HeaderItem itemDetails={item} />)}
    </div>
  </header>
);

export default Header;

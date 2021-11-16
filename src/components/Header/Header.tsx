import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderItem, { items } from '../HeaderItem/HeaderItem';
import styles from './Header.module.scss';
import HamburgerMenuIcon from '../HamburgerMenuIcon/HamburgerMenuIcon';

const Header = () => (
  <header className={styles.header}>
    <HeaderLogo />
    <HamburgerMenuIcon />
    <div className={styles.headerItemsContainer}>
      {items.map((item) => <HeaderItem key={item.text} itemDetails={item} />)}
    </div>
  </header>
);

export default Header;

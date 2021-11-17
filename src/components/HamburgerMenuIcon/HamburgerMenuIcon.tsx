import React from 'react';
import styles from './HamburgerMenuIcon.module.scss';
import hamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../assets/shared/mobile/icon-close.svg';
import { useMenuProvider } from '../../context/MenuProvider';

const HamburgerMenuIcon = () => {
  const { isOpen } = useMenuProvider();
  return (
    <div className={styles.menuIcon}>
      {isOpen ? <img src={closeIcon} alt="Close icon" /> : <img src={hamburgerIcon} alt="Hamburger icon" />}
    </div>
  );
};

export default HamburgerMenuIcon;

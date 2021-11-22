import React from 'react';
import styles from './HamburgerMenuIcon.module.scss';
import hamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../assets/shared/mobile/icon-close.svg';
import { useMenuProvider } from '../../context/MenuProvider';

const HamburgerMenuIcon = () => {
  const { isOpen, setIsOpen } = useMenuProvider();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.menuIcon}>
      {isOpen ? <img src={closeIcon} role="button" alt="Close icon" onClick={toggleMenu} /> : <img role="button" src={hamburgerIcon} alt="Hamburger icon" onClick={toggleMenu} />}
    </div>
  );
};

export default HamburgerMenuIcon;

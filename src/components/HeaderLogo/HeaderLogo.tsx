import React from 'react';
import logo from '../../assets/shared/desktop/logo.svg';
import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => (
  <img src={logo} className={styles.logo} alt="Logo" />
);

export default HeaderLogo;

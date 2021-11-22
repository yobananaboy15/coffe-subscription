import React from 'react';
import { Link } from 'react-router-dom';
import { useMenuProvider } from '../../context/MenuProvider';
import styles from './MobileMenu.module.scss';

// Två olika klasser, en som visas när man har menyn öppen
// En klass för när menyn är öppen. -> media query som sätter till display: none på söttre skärmar.
// En klass för när den är stängd -> display: none;
// När man trycker på länken sätt isOpen till null

const MobileMenu = () => {
  const { isOpen } = useMenuProvider();
  return isOpen ? (
    <div className={styles.openMenu}>
      <div className={styles.navigationMenu}>
        <Link to="/" className={styles.navigationLink}><h4>Home</h4></Link>
        <Link to="about" className={styles.navigationLink}><h4>About Us</h4></Link>
        <Link to="subscribe" className={styles.navigationLink}><h4>Create Your Plan</h4></Link>
      </div>
    </div>
  )
    : null;
};

export default MobileMenu;

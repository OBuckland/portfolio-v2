import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
    <div className={styles.nameTitle}>Olivia Buckland</div>
    <div className={styles.navLinksContainer}>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Projects</a>
      <button className={styles.contactBtn}>Get in Touch</button>
    </div>
    </nav>
  )
}

export default NavBar;
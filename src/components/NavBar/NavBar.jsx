import React from 'react';
import styles from './NavBar.module.scss';
import About from '../About/About';

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
    <div className={styles.nameTitle}>Olivia Buckland</div>
    <div className={styles.navLinksContainer}>
      <a href="#projectsSection">Projects</a>
      <a href="#aboutSection">About</a>
      <button className={styles.contactBtn}>Get in Touch</button>
    </div>
    </nav>
  )
}

export default NavBar;
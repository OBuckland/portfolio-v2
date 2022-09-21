import React from 'react';
import styles from './NavBar.module.scss';
import About from '../About/About';

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
    <div className={styles.nameTitle}>Olivia Buckland</div>
    <div className={styles.navLinksContainer}>
      <a href="#homeSection">Home</a>
      <a href="#aboutSection">About</a>
      <a href="#projectsSection">Projects</a>
      <button className={styles.contactBtn}>Get in Touch</button>
    </div>
    </nav>
  )
}

export default NavBar;
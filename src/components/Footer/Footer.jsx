import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
    <p> Email </p>
    <div className={styles.footerLinks}>
    <p> GitHub </p>
    <p> LinkedIn </p>
    <p> CV </p>
    </div>
    </footer>
  )
}

export default Footer;
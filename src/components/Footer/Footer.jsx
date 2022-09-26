import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
    <div className={styles.footerLinks}>
    <a href="mailto:oliviabuckland@hotmail.com" target="_blank"><FontAwesomeIcon className={styles.icons} icon={faEnvelope}/></a>
  
    <FontAwesomeIcon className={styles.icons} icon={faGithub}/>
    <FontAwesomeIcon className={styles.icons} icon={faLinkedin}/>
    <FontAwesomeIcon className={styles.icons} icon={faFile}/>
    </div>
    </footer>
  )
}

export default Footer;
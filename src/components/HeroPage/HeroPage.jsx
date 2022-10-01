import React from 'react';
import styles from './HeroPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCat} from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/portfolio-profile.jpg';
import { Link, animateScroll as scroll } from "react-scroll";


const HeroPage = () => {
  return (
    <section id="homeSection" className={styles.heroPageContainer}>
      
        <div className={styles.heroTextContainer}>
        <h3 className={styles.introText}>{  <FontAwesomeIcon icon={faCat}></FontAwesomeIcon>}  Hey! I'm Olivia Buckland</h3>
        <h1 className={styles.headingText}> A Junior Software Developer based in Sydney.</h1>
        <Link className={styles.heroPageBtn} 
            activeClass="active"
            to="projectsSection"
            spy={true}
            smooth={true}
      >Take a look at my work {  <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>} 
      </Link>

        </div>
        <img className={styles.profileImage} src={profileImage} alt="profile" />


    </ section>
  )
}

export default HeroPage;
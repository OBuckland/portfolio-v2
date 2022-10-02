import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
// import PropType from 'prop-types';
import About from '../About/About';

const NavBar = () => {

  const [contactMenuIsOpen, setContactMenuIsOpen] = useState(false);


  const toggleContactMenu = () => {
    setContactMenuIsOpen(!contactMenuIsOpen)
  };

  const contactStyle = contactMenuIsOpen ? styles.menuIsOpenStyle : styles.menuIsClosedStyle;

  // const [value, setValue] = useState("email");
  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }
  return (
    <nav className={styles.navContainer}>
    <div className={styles.nameTitle}>Olivia Buckland</div>
    <div className={styles.nameTitleInitals}>OB</div>
    <div className={styles.navLinksContainer}>
      <Link 
        activeClass="active"
        to="projectsSection"
        smooth={true}>
          Projects
      </Link>

      <Link
            activeClass="active"
            to="aboutSection"
            smooth={true}>
        About
      </Link>
      <button onClick={toggleContactMenu} className={styles.contactBtn}>Get in Touch</button>


    </div>


     {/* <div>
      <select onChange={handleChange} >
        <option>Email</option>
        <option value="linkedIn">LinkedIn</option>
        <option value="cv">CV</option>
      </select>
    </div>  */}
    </nav>
  )
}

export default NavBar;
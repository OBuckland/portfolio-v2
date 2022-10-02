import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faReact, faHtml5, faSass, faCss3, faJsSquare, faNode, faFigma} from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faB, faVials, faFire } from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
    <h2 className={styles.heading}>Technical Skills</h2>
    <p className={styles.description}>Here is the tech stack I have been working with...</p>

    <ul className={styles.skillsListContainer}>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons} icon={faReact}/>
        React
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons}  icon={faJsSquare}/>
        JavaScript
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons}  icon={faHtml5}/>
        HTML5
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons} icon={faCss3}/>
        CSS3
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons}  icon={faSass}/>
        Sass
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons} icon={faCodeBranch} />
        Git
      </li>
      <li className={styles.skills}>
        <FontAwesomeIcon className={styles.icons}  icon={faGithub}/>
        GitHub
      </li>
      <li className={styles.skills}>
       <FontAwesomeIcon className={styles.icons}  icon={faB}/>
        BEM
      </li>
      <li className={styles.skills}>
       <FontAwesomeIcon className={styles.icons}  icon={faNode}/>
        node.js
      </li>
      <li className={styles.skills}>
       <FontAwesomeIcon className={styles.icons}  icon={faFire}/>
        Firebase
      </li>
      <li className={styles.skills}>
       <FontAwesomeIcon className={styles.icons}  icon={faFigma}/>
        Figma
      </li>
      <li className={styles.skills}>
       <FontAwesomeIcon className={styles.icons}  icon={faVials}/>
        Testing
      </li>
    </ul>
    </ section>
  )
}

export default Skills;
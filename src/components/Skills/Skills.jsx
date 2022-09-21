import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faReact, faHtml5, faSass, faCss3, faJsSquare} from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
  return (
    <>
    <h2>Technical Skills</h2>


  
    <FontAwesomeIcon icon={faJsSquare}/>
    <FontAwesomeIcon icon={faReact}/>
    <FontAwesomeIcon icon={faHtml5}/>
    <FontAwesomeIcon icon={faCss3}/>
    <FontAwesomeIcon icon={faSass}/>
    <FontAwesomeIcon icon={faGithub}/>



    <p>BEM </p>
    </>
  )
}

export default Skills;
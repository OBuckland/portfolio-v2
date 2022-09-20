import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faReact, faHtml5, faSass, faCss3, faJsSquare} from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
  return (
    <>
    <h2>Technical Skills</h2>


  
    <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>



    <p>BEM </p>
    </>
  )
}

export default Skills;
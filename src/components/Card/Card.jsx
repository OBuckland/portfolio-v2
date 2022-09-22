import React from 'react';
import styles from './Card.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye} from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {

  const {name, description, image, technology, gitHub, url} = props.project;

  return (

      <div className={styles.card}>

        <div className={styles.pictureContainer}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>

        <div className={styles.textSection}>
          <h3 className={styles.technology}>{technology}</h3>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.links}>
        <a href={gitHub}>Code <FontAwesomeIcon icon={faCode} /></a>
        <a href={url}>  Preview <FontAwesomeIcon icon={faEye} /> </a>
        </div>

      </div>
  )
}

export default Card
import React from 'react'
import styles from './CardBack.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye} from '@fortawesome/free-solid-svg-icons';


const CardBack = (props) => {
  const {name, description, image, technology, gitHub, url} = props.project;
  return (

    <div className={styles.cardBack}>

        <p>{description}</p>
        <div className={styles.iconsContainer}>
          <a className={styles.icons} href={gitHub}  target="_blank">Code <FontAwesomeIcon icon={faCode} /></a>
          <a className={styles.icons} href={url}  target="_blank">Preview <FontAwesomeIcon icon={faEye} /></a>
        </div>
        

  </div>

  )
}

export default CardBack
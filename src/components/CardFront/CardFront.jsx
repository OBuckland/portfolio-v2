import React from 'react';
import styles from './CardFront.module.scss';




const CardFront = (props) => {

  const {name, description, image, technology, gitHub, url} = props.project;

  return (

      <div className={styles.cardFront}>

        <div className={styles.pictureContainer}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>

        <div className={styles.textContainer}>
          <h1>{name}</h1>
          <h3 className={styles.technology}>{technology}</h3>
        </div>

      </div>
  )
}

export default CardFront;
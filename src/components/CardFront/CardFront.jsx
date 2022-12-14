import React from 'react';
import styles from './CardFront.module.scss';




const CardFront = (props) => {

  const {image} = props.project;

  return (

      <div className={styles.cardFront}>

        <div className={styles.pictureContainer}>
          <img className={styles.cardImage} src={image} alt="" />
        </div>

      </div>
  )
}

export default CardFront;
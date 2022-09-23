import React, {useState} from 'react'
import styles from './Card.module.scss';
import CardBack from '../CardBack'
import CardFront from '../CardFront'


const Card = (props) => {
  const [isFaceDown, setIsFaceDown] = useState(false);
  const flipStyles = isFaceDown ? styles.faceDown : "";


  const {project} = props;
  // const {name, description, image, technology, gitHub, url} = props.project;

  return (
    <section 

    className={`${flipStyles} ${styles.card}`}
    onClick={() => setIsFaceDown(!isFaceDown)}>
      
      <div className={styles.front}>
        <CardFront project={project} />
      </div>

      <div className={styles.back}>
        <CardBack project={project}/>
      </div>


    </section>
  )
}

export default Card
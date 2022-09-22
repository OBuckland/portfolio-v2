import React from 'react';
import styles from './About.module.scss'

const About = () => {
  return (
    <section id="aboutSection" className={styles.aboutContainer}>
      <h2>About me</h2>
      <div>

        <p className={styles.aboutIntro}>Intro about me :) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nam eum modi architecto illo repellendus dicta, deleniti doloremque ullam dolorum, magnam dignissimos qui sequi est. Quia soluta esse dolorem quae.</p>
        <h3>Experience</h3>

        <div className={styles.textContainer}>
          <h4>
            Job title
          </h4>
          <p>01/10/2021 - 01/09/2022</p>
          <ul>
            <li>About the job</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div  className={styles.textContainer}>
          <h4>
            Job title
          </h4>
          <p>Dates of job</p>
          <ul>
            <li>About the job</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About;
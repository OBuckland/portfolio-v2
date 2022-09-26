import React from 'react';
import styles from './About.module.scss';
import nology from '../../assets/nology_logo2.jpeg';


const About = () => {
  return (
    <section id="aboutSection" className={styles.aboutContainer}>
      <h2>About me</h2>
      <div>

        <p className={styles.aboutIntro}>Nurse turned software developer.  Since completing my Children's Nursing Degree, I have worked in a variety of roles. In 2021 I decided to pursue a career change and enrolled on a self-paced software development course. Now I am looking for my first role as a front-end developer, to build on the skills and knowledge that I have gained. </p>
        <h3>Experience</h3>

        <div className={styles.jobContainer}>

        <div className={styles.textContainer}>
          <h4>
            Trainee Software Developer
          </h4>
          <p>01/10/2021 - 01/09/2022</p>
          <ul>
            <li>About the job</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div  className={styles.textContainer}>
          {/* <img src={nology} alt="" /> */}
          <h4>
            Immunisation Nurse
          </h4>
          <p>Dates of job</p>
          <ul>
            <li>About the job</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div  className={styles.textContainer}>
          <h4>
            Parlimentary Questions Team
          </h4>
          <p>Dates of job</p>
          <ul>
            <li>About the job</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        </div>

      </div>
    </section>
  )
}

export default About;
import React from 'react';
import styles from './About.module.scss';
import nology from '../../assets/nology_logo2.jpeg';
import nhs from '../../assets/nhs-logo2.jpg';
import gov from '../../assets/defra-logo.jpeg';


const About = () => {
  return (
    <section id="aboutSection" className={styles.aboutContainer}>
      <h2>About me</h2>


      <div className={styles.rightSideContainer}>
        
        <p className={styles.aboutIntro}>Nurse turned software developer.  Since completing my Children's Nursing Degree, I have worked in a variety of roles. In 2021 I decided to pursue a career change and enrolled on a self-paced software development course. Now I am looking for my first role as a front-end developer, to build on the skills and knowledge that I have gained. </p>
        <h3>Experience</h3>

        <section className={styles.experienceContainer}>

        <div className={styles.jobContainer}>
            <div className={styles.titleSection}>
              <img className={styles.image} src={nology} alt="" />
              <div className={styles.jobTitleAndDatesContainer}>
                <h4>
                  Trainee Software Developer
                </h4>
                <p>Oct 21 - Sep 22</p>
              </div>
            </div>
            <ul>
              <li>Learning full-stack web development skills with emphasis on front-end languages</li>
              <li>Implementing industry methodologies and frameworks in my work</li>
              <li>mplementing industry methodologies and frameworks in my work</li>
              <li>mplementing industry methodologies and frameworks in my work</li>
            </ul>
          </div>

          <div className={styles.jobContainer}>
            <div className={styles.titleSection}>
              <img className={styles.image} src={nhs} alt="" />
              <div className={styles.jobTitleAndDatesContainer}>
                <h4>
                Immunisation Nurse
                </h4>
                <p>Sep 20 - Aug 22</p>
              </div>
            </div>
            <ul>
              <li>Delivering vaccinations at mass vaccination sites, mobile vaccination units and patients' homes</li>
              <li>In charge of leading a team of both clinical and non-clinical staff</li>
              <li>Training new staff</li>
              <li>Ensure everyone in the team was working safely and effectively</li>
            </ul>
          </div>

          <div className={styles.jobContainer}>
            <div className={styles.titleSection}>
              <img className={styles.image} src={gov} alt="" />
              <div className={styles.jobTitleAndDatesContainer}>
                <h4>
                Parlimentary Questions Team
                </h4>
                <p>May 19 - Feb 20</p>
              </div>
            </div>
            <ul>
              <li>Training, supervising and monitoring the junior members of the team</li>
              <li>Responsible for drafting accurate and comprehensive answers to Parliamentary Questions</li>
              <li>Working to tight weekly deadlines</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About;
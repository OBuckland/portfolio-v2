import React from 'react';
import styles from './Projects.module.scss';
import Card from './../Card';
import { projectData } from '../../projectData';

const Projects = () => {
// const {project} = props;
  // const renderCards= () => {
  //   return <Card project={project}/>
  // }

  return (
    <section className={styles.cardsContainer}>
{projectData.map(project => <Card project={project} key={project.name}/>)}

    </ section>
  )
}

export default Projects;
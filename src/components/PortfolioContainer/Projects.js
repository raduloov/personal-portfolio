import React from 'react';
import styles from './Projects.module.css';

const Projects = props => {
  return (
    <React.Fragment>
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles.container}>{props.children}</div>
    </React.Fragment>
  );
};

export default Projects;

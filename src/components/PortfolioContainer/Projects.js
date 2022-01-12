import styles from './Projects.module.css';

const Projects = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Projects;

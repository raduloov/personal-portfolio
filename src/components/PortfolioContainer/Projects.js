import { Fragment } from 'react/cjs/react.production.min';
import styles from './Projects.module.css';

const Projects = props => {
  return (
    <Fragment>
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles.container}>{props.children}</div>
    </Fragment>
  );
};

export default Projects;

import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  return (
    <div className={styles.item}>
      <img className={styles.thumb} src={props.img} />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.date}>{props.date}</p>
      <hr></hr>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <a href={props.demoLink} target="_blank">
            <i className="far fa-play-circle"></i> Live Demo
          </a>
        </button>
        <button className={styles.btn}>
          <a href={props.gitLink} target="_blank">
            <i className="fas fa-code"></i> GitHub Repo
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

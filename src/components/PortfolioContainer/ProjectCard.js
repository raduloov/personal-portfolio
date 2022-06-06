import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <img className={styles.thumb} src={props.img} alt="Thumbnail" />
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.date}>{props.date}</p>
        <hr></hr>
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.buttons}>
        {props.demoLink && (
          <a
            className={styles.btn}
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-play"></i>Live Demo
          </a>
        )}
        <a
          className={styles.btn}
          href={props.gitLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

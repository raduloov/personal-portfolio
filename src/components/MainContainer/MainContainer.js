import styles from './MainContainer.module.css';

const TitleBox = () => {
  return (
    <div className={styles['title-box']}>
      <div className={styles.title}>
        <h1>Yavor Radulov</h1>
        <hr></hr>
        <h3>Web Developer</h3>
      </div>
      <div className={styles.links}>
        <a href="https://instagram.com/raduloov" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/raduloov" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yavorradulov/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

const MainContainer = () => {
  return (
    <div className={styles.container} id="home">
      <TitleBox />
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <a href="#projects">
        <i className="fas fa-chevron-down fa-4x"></i>
      </a>
    </div>
  );
};

export default MainContainer;

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <a href="#home">
        <i className="fas fa-chevron-up fa-4x"></i>
      </a>
      <p>Back to Top</p>
      <hr></hr>
    </div>
  );
};

export default Footer;

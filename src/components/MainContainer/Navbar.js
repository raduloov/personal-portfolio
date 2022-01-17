import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.link} href="#projects">
        Projects
      </a>
      <a className={styles.link} href="#home">
        Home
      </a>
      {/* <a className={styles.link} href="#tech-stack">
        Tech Stack
      </a> */}
      <a className={styles.link} href="#certifications">
        Certifications
      </a>
      <div className={styles['custom-shape-divider-top']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className={styles['shape-fill']}
          ></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

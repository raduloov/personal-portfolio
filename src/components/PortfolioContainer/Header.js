import { Fragment } from 'react';
import styles from './Header.module.css';
import Wave from './Wave';

const Header = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h2>Personal Projects</h2>
      </div>
      <Wave direction="down" />
    </Fragment>
  );
};

export default Header;

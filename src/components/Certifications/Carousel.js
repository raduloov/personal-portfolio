import CERTS from './cert-img';
import styles from './Carousel.module.css';

const Carousel = props => {
  if (props.cert === 'fundamentals') {
    return (
      <div className={styles.container}>
        <img src={CERTS[6]} />
        <img src={CERTS[7]} />
        <img src={CERTS[8]} />
      </div>
    );
  }
  if (props.cert === 'basics') {
    return (
      <div className={styles.container}>
        <img src={CERTS[9]} />
        <img src={CERTS[10]} />
      </div>
    );
  }

  return <div className={styles.container}></div>;
};

export default Carousel;

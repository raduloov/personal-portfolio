import CERTS from './cert-img';
import styles from './Carousel.module.css';

const Carousel = props => {
  if (props.cert === 'advanced') {
    return (
      <div className={styles.container}>
        <img src={CERTS[12]} alt="Page" />
        <img src={CERTS[13]} alt="Page" />
      </div>
    );
  }
  if (props.cert === 'fundamentals') {
    return (
      <div className={styles.container}>
        <img src={CERTS[7]} alt="Page" />
        <img src={CERTS[8]} alt="Page" />
        <img src={CERTS[9]} alt="Page" />
      </div>
    );
  }
  if (props.cert === 'basics') {
    return (
      <div className={styles.container}>
        <img src={CERTS[10]} alt="Page" />
        <img src={CERTS[11]} alt="Page" />
      </div>
    );
  }

  return <div className={styles.container}></div>;
};

export default Carousel;

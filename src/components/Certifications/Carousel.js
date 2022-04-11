import CERTS from './cert-img';
import styles from './Carousel.module.css';

const Carousel = props => {
  if (props.cert === 'applications') {
    return (
      <div className={styles.container}>
        <img src={CERTS[17]} alt="Page" />
        <img src={CERTS[18]} alt="Page" />
      </div>
    );
  }
  if (props.cert === 'advanced') {
    return (
      <div className={styles.container}>
        <img src={CERTS[15]} alt="Page" />
        <img src={CERTS[16]} alt="Page" />
      </div>
    );
  }
  if (props.cert === 'fundamentals') {
    return (
      <div className={styles.container}>
        <img src={CERTS[12]} alt="Page" />
        <img src={CERTS[13]} alt="Page" />
        <img src={CERTS[14]} alt="Page" />
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

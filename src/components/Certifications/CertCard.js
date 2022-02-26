import styles from './CertCard.module.css';

const CertCard = props => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <img src={props.img} alt="Certificate" />
      <div>
        <h4>{props.title}</h4>
        <h5>{props.date}</h5>
      </div>
    </div>
  );
};

export default CertCard;

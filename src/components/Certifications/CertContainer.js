import CertCard from './CertCard';
import styles from './CertContainer.module.css';
import CERTS from './cert-img';
import Wave from '../UI/Wave';

const CertContainer = props => {
  const passToParent = certificate => {
    props.onClick(certificate);
  };

  return (
    <div id="certifications">
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.certificates}>
          <CertCard
            onClick={() => passToParent(CERTS[0])}
            img={CERTS[0]}
            title="Responsive Web Design"
            date="05.01.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[1])}
            img={CERTS[1]}
            title="JavaScript Algorithms and Data Structures"
            date="03.01.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[2])}
            img={CERTS[2]}
            title="The Complete JavaScript Course 2022: From Zero to Expert!"
            date="08.12.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[3])}
            img={CERTS[3]}
            title="SoftUni Programming Fundamentals"
            date="07.12.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[4])}
            img={CERTS[4]}
            title="Modern HTML & CSS From The Beginning (Including Sass)"
            date="17.05.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[5])}
            img={CERTS[5]}
            title="SoftUni Programming Basics"
            date="23.03.2021"
          />
        </div>
      </div>
      <Wave direction="down" />
    </div>
  );
};

export default CertContainer;

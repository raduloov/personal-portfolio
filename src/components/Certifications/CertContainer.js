import CertCard from './CertCard';
import styles from './CertContainer.module.css';
import CERTS from './cert-img';
import Wave from '../UI/Wave';

const CertContainer = (props) => {
  const passToParent = (certificate) => {
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
            title="Ethereum and Solidity: The Complete Developer's Guide"
            date="21.07.2024"
          />
          <CertCard
            onClick={() => passToParent(CERTS[1])}
            img={CERTS[1]}
            title="SoftUni JS Applications"
            date="02.04.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[3])}
            img={CERTS[2]}
            title="React Native - The Practical Guide"
            date="24.02.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[2])}
            img={CERTS[3]}
            title="React - The Complete Guide (incl Hooks, React Router, Redux)"
            date="24.02.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[4])}
            img={CERTS[4]}
            title="SoftUni JS Advanced"
            date="19.02.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[5])}
            img={CERTS[5]}
            title="Responsive Web Design"
            date="05.01.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[6])}
            img={CERTS[6]}
            title="JavaScript Algorithms and Data Structures"
            date="03.01.2022"
          />
          <CertCard
            onClick={() => passToParent(CERTS[7])}
            img={CERTS[7]}
            title="The Complete JavaScript Course 2022: From Zero to Expert!"
            date="08.12.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[8])}
            img={CERTS[8]}
            title="SoftUni Programming Fundamentals"
            date="07.12.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[9])}
            img={CERTS[9]}
            title="Modern HTML & CSS From The Beginning (Including Sass)"
            date="17.05.2021"
          />
          <CertCard
            onClick={() => passToParent(CERTS[10])}
            img={CERTS[10]}
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

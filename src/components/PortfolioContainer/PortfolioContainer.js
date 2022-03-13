import styles from './PortfolioContainer.module.css';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import TechStack from '../TechStack/TechStack';
import THUMBNAILS from './thumbnails';
import Wave from '../UI/Wave';

const PortfolioContainer = () => {
  return (
    <div className={styles.container} id="projects">
      <TechStack />
      <Projects>
        <ProjectCard
          img={THUMBNAILS[0]}
          title="Chat App with Firebase"
          date="12.03.2022"
          description="Real time messaging app, built with React and Chakra UI for the front-end and Firebase Firestore for the back-end. Written in TypeScript."
          demoLink="https://chat-app--firebase.vercel.app/"
          gitLink="https://github.com/raduloov/chat-app-firebase"
        />
        <ProjectCard
          img={THUMBNAILS[1]}
          title="Bulb Up! Forum"
          date="20.02.2022"
          description="Log in to share your ideas or ask questions, give feedback or answer others, or give a post a bulb. Bulb-Up is built using React and Tailwind for the front-end and Firebase for the back-end database. Written in TypeScript."
          demoLink="https://bulb-up.netlify.app/"
          gitLink="https://github.com/raduloov/bulb-up-forum"
        />
        <ProjectCard
          img={THUMBNAILS[2]}
          title="Pseudo Shop"
          date="24.01.2022"
          description="Web store app with dummy products, built with React, Redux and Tailwind. Connected to a backend database using Firebase. Cart items saved to and loaded from Local Storage"
          demoLink="https://pseudo-shop.netlify.app/"
          gitLink="https://github.com/raduloov/pseudo-shop"
        />
        <ProjectCard
          img={THUMBNAILS[3]}
          title="Take-a-Note"
          date="16.01.2022"
          description="Write and keep track of notes with custom colors and dates, saved to your local storage"
          demoLink="https://take-some-notes.netlify.app/"
          gitLink="https://github.com/raduloov/take-a-note"
        />
        <ProjectCard
          img={THUMBNAILS[4]}
          title="Weather App"
          date="15.12.2021"
          description="Get weather information in real time for your current location or a manually typed one"
          demoLink="https://weatherfy-app.netlify.app/"
          gitLink="https://github.com/raduloov/weather-app"
        />
        <ProjectCard
          img={THUMBNAILS[5]}
          title="Calculator"
          date="08.12.2021"
          description="Simple JavaScript calculator"
          demoLink="https://basic-calcc.netlify.app/"
          gitLink="https://github.com/raduloov/calculator"
        />
        <ProjectCard
          img={THUMBNAILS[6]}
          title="Crypto Markets"
          date="07.12.2021"
          description="Crypto prices and market cap in real time"
          demoLink="https://crypto-marketss.netlify.app/"
          gitLink="https://github.com/raduloov/crypto-markets"
        />
        <ProjectCard
          img={THUMBNAILS[7]}
          title="Quiz Game"
          date="01.12.2021"
          description="Simple quiz game with difficulties, sounds and fluid UI"
          demoLink="https://the-quiz-game.netlify.app"
          gitLink="https://github.com/raduloov/quiz-game"
        />
      </Projects>
      <Wave direction="up" />
    </div>
  );
};

export default PortfolioContainer;

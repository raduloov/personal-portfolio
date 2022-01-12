import Header from './Header';
import styles from './PortfolioContainer.module.css';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import THUMBNAILS from './thumbnails';

const PortfolioContainer = () => {
  return (
    <div className={styles.container} id="portfolio-container">
      <Header />
      <Projects>
        <ProjectCard
          img={THUMBNAILS[0]}
          title="Weather App"
          date="15.12.2021"
          description="Get weather information in real time for your current location or a manually typed one"
          demoLink="https://weatherfy-app.netlify.app/"
          gitLink="https://github.com/raduloov/weather-app"
        />
        <ProjectCard
          img={THUMBNAILS[1]}
          title="Calculator"
          date="08.12.2021"
          description="Simple JavaScript calculator"
          demoLink="https://basic-calcc.netlify.app/"
          gitLink="https://github.com/raduloov/calculator"
        />
        <ProjectCard
          img={THUMBNAILS[2]}
          title="Crypto Markets"
          date="07.12.2021"
          description="Crypto prices and market cap in real time"
          demoLink="https://crypto-marketss.netlify.app/"
          gitLink="https://github.com/raduloov/crypto-markets"
        />
        <ProjectCard
          img={THUMBNAILS[3]}
          title="Quiz Game"
          date="01.12.2021"
          description="Simple quiz game with difficulties, sounds and fluid UI"
          demoLink="https://the-quiz-game.netlify.app"
          gitLink="https://github.com/raduloov/quiz-game"
        />
      </Projects>
      <Footer />
    </div>
  );
};

export default PortfolioContainer;

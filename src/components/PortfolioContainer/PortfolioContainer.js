import styles from './PortfolioContainer.module.css';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import TechStack from '../TechStack/TechStack';
import Wave from '../UI/Wave';
import projects from './projectsData';

const PortfolioContainer = () => {
  return (
    <div className={styles.container} id="projects">
      <TechStack />
      <Projects>
        {projects.map((project, index) => (
          <ProjectCard
            img={project.imageUrl}
            title={project.title}
            date={project.date}
            description={project.description}
            demoLink={project.demoUrl}
            gitLink={project.gitUrl}
            key={index}
          />
        ))}
      </Projects>
      <Wave direction="up" />
    </div>
  );
};

export default PortfolioContainer;

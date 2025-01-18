import { projects } from "./data";
import {
  ProjectDescription,
  ProjectDate,
  ProjectTitle,
  ProjectsContainer,
  ProjectCard,
} from "./Projects.styled";

const Projects = () => {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectDate>{project.date}</ProjectDate>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

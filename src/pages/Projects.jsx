import ProjectCard from "../components/Card/ProjectCard.jsx";
import projectsData from '../projectsData.json';
import '../components/Card/Cards.css';


function Projects() {
  const projectCards = projectsData.map((project, index) => (
    <ProjectCard
      key={index}
      name={project.name}
      description={project.description}
      image={project.image}
      repo={project.repo}
      deploy={project.deploy}
      date={project.date}
      
    />
  ));

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 container-cards mt-5">
      {projectCards}
    </ul>
  );
}

export default Projects;
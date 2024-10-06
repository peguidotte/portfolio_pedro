import { useParams } from 'react-router-dom';
import projectsData from '../projectsData.json';
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaSass } from "react-icons/fa";

const iconMap = {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  FaSass
};

function ProjectDetail() {
  const { name } = useParams();
  const project = projectsData.find(p => p.name === name);

  if (!project) {
    return <div>Project não encontrado 😞</div>;
  }

  return (
    <div>
      <h1>Detalhes: {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.details}</p>
      <p>{project.target}</p>
      <p>{project.style}</p>
      <div>
        <h2>Ferramentas Utilizadas:</h2>
        <ul>
          {project.tools.map((tool, index) => {
            const IconComponent = iconMap[tool.icon];
            return (
              <li key={index} style={{ color: tool.color }}>
                <IconComponent />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;
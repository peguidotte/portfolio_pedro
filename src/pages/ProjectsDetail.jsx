import { NavLink, useParams } from 'react-router-dom';
import projectsData from '../projectsData.json';
import {
    RiBootstrapFill,
    RiCss3Fill,
    RiGithubFill,
    RiHtml5Fill,
    RiJavascriptFill,
    RiPagesFill,
    RiReactjsFill,
    RiTailwindCssFill,
} from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import '../components/Projects/ProjectCard.css'

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
        <div className='font-principal mt-4 flex flex-col gap-6 sm:gap-10 sm:p-2 md:p-5 lg:p-10'>
            <NavLink
                to="/projects"
                className="font-semibold flex items-center gap-2 text-xl"
            >
                <TiArrowBack /> Voltar
            </NavLink>
            <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent text-2xl font-bold sm:text-5xl md:text-center md:self-center'>
                {project.name}
            </h1>
            <img src={project.image} alt={project.name} className='shadow-box rounded-2xl md:w-5/6 xl:w-4/6 text-center self-center' />
            <h2 className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent text-lg font-medium
                sm:text-2xl
                '>
                Detalhes:
            </h2>
            <div className='flex flex-col text-sm gap-6 text-pretty text-justify p-1 sm:text-lg'>
                <p>{project.details}</p>
                <p>{project.target}</p>
                <p>{project.style}</p>
            </div>
            <div className='flex items-center justify-between sm:justify-start sm:gap-10'>
                <h2 className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent text-lg font-medium
                    sm:text-2xl
                    '>
                    Tecnologias:
                </h2>
                <ul className='flex gap-6 text-5xl '>
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
            <div className='flex justify-around items-center'>
                <a href={project.repo} target='_blank' className='flex items-center gap-2 text-xl'><RiGithubFill /> Repositório</a>
                <a href={project.deploy} target='_blank' className='flex items-center gap-2 text-xl'><RiPagesFill />Deploy</a>
            </div>
            <h4 className='text-gray-700'>Conclusão: {project.date}</h4>
            <NavLink
                to="/projects"
                className="font-semibold flex items-center gap-2 text-xl"
            >
                <TiArrowBack /> Voltar
            </NavLink>
        </div>
    );
}

export default ProjectDetail;
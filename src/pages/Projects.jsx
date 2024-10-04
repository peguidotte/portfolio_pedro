import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import EpitStopImage from "../assets/EpitStop.png";
import MelodiaImage from "../assets/Melodia.png";
import EcoTrendImage from "../assets/EcoTrend.png";
import WasteWiseImage from "../assets/WasteWise.png";
import MiniRedeSocialImage from "../assets/MiniRedeSocial.png";
import PortfolioImage from "../assets/Portfolio.png";


import { FaSass } from "react-icons/fa";
import Cards from "../components/Card/Cards.jsx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


function Projects() {
  const projectsData = [
    {
      name: "E-PitStop",
      description: "Projeto Fórmula E",
      image: EpitStopImage,
      repo: "https://github.com/peguidotte/E-PitStop__React",
      deploy: "https://e-pit-stop.vercel.app/",
      date: "present",
      tools: [
        { icon: RiReactjsFill, color: "#61DAFB" },
        { icon: RiTailwindCssFill, color: "#38B2AC" },
      ],
    },
    {
      name: "Melodia",
      description: "Projeto Melodia",
      image: MelodiaImage,
      repo: "https://github.com/peguidotte/Melodia",
      deploy: "https://melodia-bay.vercel.app/",
      date: "10/2024",
      tools: [
        { icon: RiBootstrapFill, color: "#7952B3" },
        { icon: FaSass, color: "#CC6699" },
        { icon: RiHtml5Fill, color: "#E34F26" },
      ],
    },
    {
      name: "EcoTrend",
      description: "Projeto EcoTrend",
      image: EcoTrendImage,
      repo: "https://github.com/peguidotte/EcoTrend",
      deploy: "https://eco-trend-lac.vercel.app/",
      date: "09/2024",
      tools: [
        { icon: RiBootstrapFill, color: "#7952B3" },
        { RiCss3Fill, color: "#1572B6" },
        { icon: RiHtml5Fill, color: "#E34F26" },
      ],
    },
    {
      name: "WasteWise",
      description: "Projeto WasteWise",
      image: WasteWiseImage,
      repo: "https://github.com/peguidotte/WasteWise",
      deploy: "https://waste-wise-ibmn.vercel.app/",
      date: "06/2024",
      tools: [
        { icon: RiJavascriptFill, color: "#F7DF1E" },
        { icon: RiCss3Fill, color: "#1572B6" },
        { icon: RiHtml5Fill, color: "#E34F26" },
      ],
    },
    {
      name: "Mini Rede-Social",
      description: "Projeto Mini Rede-Social",
      image: MiniRedeSocialImage,
      repo: "https://github.com/peguidotte/Mini-Rede-Social",
      deploy: "https://peguidotte.github.io/Mini-Rede-Social/",
      data: "04/2024",
      tools: [
        { icon: RiJavascriptFill, color: "#F7DF1E" },
        { icon: RiCss3Fill, color: "#1572B6" },
        { icon: RiHtml5Fill, color: "#E34F26" },
      ],
    },
    {
      name: "Portfólio",
      description: "Projeto Portfólio",
      image: PortfolioImage,
      repo: "https://github.com/peguidotte/portfolio_pedro",
      deploy: "",
      data: "10/2024",
      tools: [
        { icon: RiReactjsFill, color: "#61DAFB" },
        { icon: RiTailwindCssFill, color: "#38B2AC" },
      ],
    },
  ];

  const projectCards = projectsData.map((project, index) => (
    <Cards
      key={index}
      name={project.name}
      description={project.description}
      image={project.image}
      repo={project.repo}
      deploy={project.deploy}
      date={project.date}
      tools={project.tools}
    />
  ));

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-8">
      {projectCards}
    </ul>
  );
}

export default Projects;

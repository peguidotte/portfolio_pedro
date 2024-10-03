import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import Cards from "../components/Card/Cards.jsx"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Projects() {
  const projectsData = [
    {
      name: "E-PitStop",
      description: "Projeto Fórmula E",
      image: "../assets/EpitStop.png",
      repo: "https://github.com/peguidotte/E-PitStop__React",
      deploy: "https://e-pit-stop.vercel.app/",
      date: "present",
      tools: [{ RiReactjsFill }, { RiTailwindCssFill }],
    },
    {
      name: "Melodia",
      description: "Projeto Melodia",
      image: "../assets/Melodia.png",
      repo: "https://github.com/peguidotte/Melodia",
      deploy: "https://melodia-bay.vercel.app/",
      date: "10/2024",
      tools: [{ RiBootstrapFill }, { FaSass }, { RiHtml5Fill }],
    },
    {
      name: "EcoTrend",
      description: "Projeto EcoTrend",
      image: "../assets/EcoTrend.png",
      repo: "https://github.com/peguidotte/EcoTrend",
      deploy: "https://eco-trend-lac.vercel.app/",
      date: "09/2024",
      tools: [{ RiBootstrapFill }, { RiCss3Fill }, { RiHtml5Fill }],
    },
    {
      name: "WasteWise",
      description: "Projeto WasteWise",
      image: "../assets/WasteWise.png",
      repo: "https://github.com/peguidotte/WasteWise",
      deploy: "https://waste-wise-ibmn.vercel.app/",
      date: "06/2024",
      tools: [{ RiJavascriptFill }, { RiCss3Fill }, { RiHtml5Fill }],
    },
    {
      name: "Mini Rede-Social",
      description: "Projeto Mini Rede-Social",
      image: "../assets/MiniRedeSocial.png",
      repo: "https://github.com/peguidotte/Mini-Rede-Social",
      deploy: "https://peguidotte.github.io/Mini-Rede-Social/",
      data: "04/2024",
      tools: [{ RiJavascriptFill }, { RiCss3Fill }, { RiHtml5Fill }],
    },
    {
      name: "Portfólio",
      description: "Projeto Portfólio",
      image: "../assets/Portfólio.png",
      repo: "https://github.com/peguidotte/portfolio_pedro",
      deploy: "",
      data: "10/2024",
      tools: [{ RiReactjsFill }, { RiTailwindCssFill }],
    },
  ];

  const projectCards = projectsData.map((skill, index) => (
    <Cards key={index} description={skill.description} name={skill.name}/>
));

  return (
    <ul className="mt-5 sm:mt-10 mb-10 flex justify-center space-x-4">
                <AliceCarousel
                    items={projectCards}
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                        0: { items: 5 },
                        600: { items: 6 },
                        1100: { items: 9 },
                    }}
                />
            </ul>
  )
}

export default Projects;

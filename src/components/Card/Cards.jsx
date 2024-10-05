import PropTypes from "prop-types";
import { RiGithubFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import "./Cards.css";

function Cards({ name, image, description, repo, deploy, date, tools }) {
  return (
    <li className="flex flex-col p-2 border rounded-2xl font-principal">
      <div className="flex justify-between items-baseline p-1">
        <h1 className="mb-2 font-extrabold text-2xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
          {name}
        </h1>
        <button className="flex items-center gap-2">
          See details <FaPlus />{" "}
        </button>
      </div>
      <div className="flex items-center gap-3">
        <a href={deploy} target="_blank">
          <img src={image} alt={name} className="rounded-2xl border border-black" />
        </a>
        <div className="flex flex-col text-4xl ">
          {tools.map((tool, index) => {
            if (tool.icon) {
              const Icon = tool.icon;
              return <Icon key={index} style={{ color: tool.color }} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className="p-2 flex flex-col gap-4">
        <p className="max-w-[85%]">{description}</p>
        <div className="flex items-center justify-between mr-3">
          <a href={repo} className="flex gap-2 items-center">
            <RiGithubFill className="text-2xl" />
          </a>
          <span className="text-gray-600 text-sm">{date}</span>
        </div>
      </div>
    </li>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;

import PropTypes from "prop-types";
import { RiGithubFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import "./Cards.css";

function Cards({ name, image, description, repo, deploy, date }) {
  return (
    <li className="flex flex-col rounded-2xl shadow-box font-principal hover:scale-105 duration-100 p-2">
      <div className="flex items-center justify-center gap-3">
        <a href={deploy} target="_blank">
          <img
            src={image}
            alt={name}
            className="rounded-t-2xl border-b border-black text-center"
          />
        </a>
      </div>
      <div className="flex justify-between items-baseline p-1">
        <h1 className="mb-2 font-extrabold sm:text-lg md:text-2xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
          {name}
        </h1>
        <button className="flex items-center text-sm gap-2 md:text-base">
          See details <FaPlus />
        </button>
      </div>
      <div className="p-2 flex flex-col gap-4">
        <p className="text-sm">{description}</p>
        <div className="flex items-center justify-between mr-3">
          <a href={repo} className="flex gap-2 items-center">
            <RiGithubFill className="text-2xl" />
          </a>
          <span className="text-gray-600 text-xs">{date}</span>
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
};

export default Cards;

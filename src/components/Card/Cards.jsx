import PropTypes from "prop-types";

function Cards({ name, description, image, repo, deploy, date, tools }) {
  return (
    <li className="flex flex-col items-center p-2 border border-orange-500 rounded-2xl">
      <img src={image} alt={name} className="rounded-2xl"/>
      <h1 className="mt-2 text-[8px] sm:text-base font-principal">
        {name}
      </h1>
      <p>{description}</p>
      <a href={repo}>Repo</a>
      <a href={deploy}>Deploy</a>
      <span>{date}</span>
      {tools.map((tool, index) => {
        if (tool.icon) {
          const Icon = tool.icon;
          return <Icon key={index} style={{ color: tool.color }} />;
        }
        return null;
      })}
    </li>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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

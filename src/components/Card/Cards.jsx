import PropTypes from "prop-types";

function Cards({ name, description }) {
  return (
    <li className="flex flex-col items-center">
      <span className="mt-2 text-[8px] sm:text-base font-principal">
        {name}
      </span>
      <p>{description}</p>
    </li>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;

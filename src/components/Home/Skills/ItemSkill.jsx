import PropTypes from 'prop-types';

function ItemSkill({ icon: Icon, name }) {
    return (
        <li className="flex flex-col items-center">
            <Icon className="text-2xl sm:text-6xl hover:scale-110 hover:cursor-pointer duration-300 ease-in-out" />
            <span className="mt-2 text-[8px] sm:text-base font-principal">{name}</span>
        </li>
    );
}

ItemSkill.propTypes = {
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
};

export default ItemSkill;
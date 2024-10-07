import PropTypes from 'prop-types';

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white font-bold py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline"
    >
      <Icon />{label}
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialLink;
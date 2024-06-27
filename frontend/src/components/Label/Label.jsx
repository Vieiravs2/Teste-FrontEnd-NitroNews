import PropTypes from 'prop-types';

function Label({ children, className }) {
  return (
    <label className={className}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Label;
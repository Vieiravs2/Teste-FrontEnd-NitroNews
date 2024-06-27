import PropTypes from 'prop-types';

function Input({ type, name, value, onChange, className }) {
  return (
    <div id="gradiant_div" className="bg-none focus-within:bg-gradient-to-tr rounded-lg from-[#4158D0] via-[#C840C0] via-46% to-[#FFCC70] p-[1px]">
      <input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Input;
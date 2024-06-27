import React from 'react';

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

export default Input;
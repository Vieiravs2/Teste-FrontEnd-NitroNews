import React from 'react';

function Label({ children, className }) {
  return (
    <label className={className}>
      {children}
    </label>
  );
}

export default Label;
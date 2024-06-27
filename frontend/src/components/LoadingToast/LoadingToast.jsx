import React from 'react';

function LoadingToast() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="spinner" style={{ marginRight: '10px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="animate-spin"
          style={{ width: '24px', height: '24px' }}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-25"
          ></circle>
          <path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            className="opacity-75"
          ></path>
        </svg>
      </div>
      <span>Carregando...</span>
    </div>
  );
}

export default LoadingToast;
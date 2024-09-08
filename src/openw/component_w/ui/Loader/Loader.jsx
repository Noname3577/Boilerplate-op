/* eslint-disable react-dom/no-missing-button-type */
import './Loader.css';

import React from 'react';

function Loader() {
  return (
    <div className="loader_op">
      <button className="loader__btn">
        <div className="loader"></div>
        Loading ...
      </button>
    </div>
  );
}

export default Loader;


import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <div className="loader-circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

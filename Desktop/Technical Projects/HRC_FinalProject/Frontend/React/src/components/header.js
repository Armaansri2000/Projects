import React from "react";
import "./style.css";

const header = () => {
  return (
    <div className="headr">
      <img
        className="imageHighRadius"
        src="./images/highradiusLogo.svg"
        alt=""
      />
      <img className="logoABC" src="./images/ABCLogo.svg" alt="" />
    </div>
  );
};

export default header;

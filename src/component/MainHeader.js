import React from "react";
import { Link } from "react-router-dom";
import Image from "../photos/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header" id="mainheader">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWork</h4>
          <h1>Join The Legends Of The Fitness</h1>
          <p>
            Lorem ipsum Culpa dolor eusit enim velit nostrud veniamex eautid
            deserunt deserunt deserunt deserunt .
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

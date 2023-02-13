import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <img src="logo.png" alt="" className="header-image" />
        <h3 className="header-heading">Your own home:</h3>
        <h1 className="header-heading-main">The Ultimate personal freedom</h1>
        <button className="header-button">View our properties</button>
        <div className="logos">
          <p className="logos-des"> As seen on</p>
          <div className="header-logos">
            <img src="logo-bbc.png" alt="" />
            <img src="logo-forbes.png" alt="" />
            <img src="logo-techcrunch.png" alt="" />
            <img src="logo-bi.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

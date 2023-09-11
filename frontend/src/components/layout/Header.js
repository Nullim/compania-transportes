import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-holder">
        <img id="logo" src="img/logo.png" width="100" alt="Transportes X"></img>
        <h1 className="title">Transportes X</h1>
        <h2 className="subtitle">Rápido, seguro, eficiente</h2>
      </div>
    </div>
  );
}

export default Header;

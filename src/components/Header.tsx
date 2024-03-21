import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;

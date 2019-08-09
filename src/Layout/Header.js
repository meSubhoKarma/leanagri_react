import React from "react";

const navStyles = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" style={navStyles}>
        LeanAgri
      </span>
    </nav>
  );
};

export default Header;

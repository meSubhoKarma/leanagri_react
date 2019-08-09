import React from "react";

const textStyles = {
  fontSize: "12px",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const Footer = () => {
  return (
    <span className="border-0">
      <p className="text-secondary" style={textStyles}>
        LeanAgri
      </p>
    </span>
  );
};

export default Footer;

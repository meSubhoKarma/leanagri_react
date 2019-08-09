import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

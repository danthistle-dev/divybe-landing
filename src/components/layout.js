import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import "../css/style.css"

function Layout({ children }) {
  return (
    <div id="top" className="">
      <Header />

      <main className="">
        {children}
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

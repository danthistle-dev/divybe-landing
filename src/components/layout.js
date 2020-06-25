import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import "../css/style.css"

function Layout({ children }) {
  return (
    <div className="">
      <Header />

      <main className="container mx-auto px-6">
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

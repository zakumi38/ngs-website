import React from "react";
import homeStyle from "./home.module.sass";

const Home = ({ navToggle, children }) => {
  return (
    <div
      className={`${homeStyle.home} 
    ${navToggle ? homeStyle.active : ""}`}
    >
      {children}
    </div>
  );
};

export default Home;

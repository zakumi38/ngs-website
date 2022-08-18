import React from "react";
import {Container} from "@mui/material";
import homeStyle from "./home.module.sass";

const Home = ({ navToggle, children }) => {
  return (
    <div
      className={`${homeStyle.home} 
    ${navToggle ? homeStyle.active : ""}`}
    >
      {children}
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          minHeight: "100vh",
          backgroundColor: "#F1F1F1",
        }}
      >
        <div className={homeStyle.box}>
          <h2>Hello From NGS Team's Dashboard</h2>
        </div>
      </Container>
    </div>
  );
};

export default Home;

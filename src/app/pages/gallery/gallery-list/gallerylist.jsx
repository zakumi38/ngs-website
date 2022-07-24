import {
    Container,
  } from "@mui/material";
  import React from "react";
  import GalleryTable from "./gallery-table";
  
  const GalleryList = () => {
    return (
      <>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
            minHeight: "100vh",
            backgroundColor : 'rgb(205, 220, 236)'
          }}
        >
          
          <GalleryTable />
        </Container>
      </>
    );
  };
  
  export default GalleryList;
  
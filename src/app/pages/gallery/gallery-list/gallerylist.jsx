import {Container,} from "@mui/material";
import React from "react";
import GalleryTable from "./gallery-table";

const GalleryList = () => {
    return (
      <>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "15px",
            paddingBottom: "15px",
            minHeight: "100vh",
            backgroundColor : '#F1F1F1'
          }}
        >
          
          <GalleryTable />
        </Container>
      </>
    );
  };
  
  export default GalleryList;
  
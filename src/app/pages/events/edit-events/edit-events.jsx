import React from "react";
import {Container} from "@mui/material";
import EditEventsForm from "./edit-events-form";

const EditEvents = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          minHeight: "100vh",
          backgroundColor : '#F1F1F1'
        }}
      >
        <EditEventsForm />
      </Container>
    </>
  );
};

export default EditEvents;

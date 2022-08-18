import React from "react";
import {Container} from "@mui/material";
import AddEventsForm from "./add-events-form";

const AddNewEvents = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          minHeight: "100vh",
          backgroundColor: "#F1F1F1",
        }}
      >
        <AddEventsForm />
      </Container>
    </>
  );
};

export default AddNewEvents;

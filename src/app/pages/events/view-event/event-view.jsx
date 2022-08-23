import React from "react";
import {Container} from "@mui/material";
import EventViewForm from "./event-view-form";

const EventView = () => {
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
        <EventViewForm />
      </Container>
    </>
  );
};

export default EventView;

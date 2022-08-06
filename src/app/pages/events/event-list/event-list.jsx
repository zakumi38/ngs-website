import { Container } from "@mui/material";
import React from "react";
import EventTable from "./event-table";
const EventsList = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          minHeight: "100vh",
          backgroundColor: "rgb(205, 220, 236)",
        }}
      >
        <EventTable />
      </Container>
    </>
  );
};

export default EventsList;

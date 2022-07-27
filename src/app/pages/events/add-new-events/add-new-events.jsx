import React from "react";
import { Container, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
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
          backgroundColor: "rgb(205, 220, 236)",
        }}
      >
        <AddEventsForm />
      </Container>
    </>
  );
};

export default AddNewEvents;

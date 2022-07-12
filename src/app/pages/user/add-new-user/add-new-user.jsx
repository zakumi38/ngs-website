import React from "react";
import { Container, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
import AddUserForm from "./add-user-form";
import App from "../../../../app.module.sass";
import Breadcrumb from "../../component/Breadcrumb";
const AddNewUser = () => {
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
        <AddUserForm />
      </Container>
    </>
  );
};

export default AddNewUser;

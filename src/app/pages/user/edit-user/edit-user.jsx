import React from "react";
import { Container } from "@mui/material";
import EditUserForm from "./edit-user-form";
import Breadcrumb from "../../component/Breadcrumb";

const EditUser = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          minHeight: "100vh",
        }}
      >
        <Breadcrumb />
        <EditUserForm />
      </Container>
    </>
  );
};

export default EditUser;

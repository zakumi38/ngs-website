import React from "react";
import {Container} from "@mui/material";
import EditUserForm from "./edit-user-form";

const EditUser = () => {
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
        <EditUserForm />
      </Container>
    </>
  );
};

export default EditUser;

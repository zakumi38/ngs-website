import React from "react";
import {Container} from "@mui/material";
import AddUserForm from "./add-user-form";

const AddNewUser = () => {
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
        <AddUserForm />
      </Container>
    </>
  );
};

export default AddNewUser;

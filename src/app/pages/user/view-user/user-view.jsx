import { Container } from "@mui/system";
import React from "react";
import UserViewForm from "./user-view-form";

const UserView = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        minHeight: "100vh",
        backgroundColor: "rgb(205, 220, 236)",
      }}
    >
      <UserViewForm />
    </Container>
  );
};

export default UserView;

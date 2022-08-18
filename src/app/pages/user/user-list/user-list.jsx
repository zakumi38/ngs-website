import { Container } from "@mui/material";
import React from "react";
import UserTable from "./user-table";
const UserList = () => {
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
        <UserTable />
      </Container>
    </>
  );
};

export default UserList;

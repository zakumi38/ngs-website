import {Container,} from "@mui/material";
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
          backgroundColor : '#F1F1F1'
        }}
      >
        
        <UserTable />
      </Container>
    </>
  );
};

export default UserList;

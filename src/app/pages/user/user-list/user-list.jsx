import {
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Breadcrumbs,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import userListStyle from "./user-list.module.sass";
import UserTable from "./user-table";
import Breadcrumb from "../../component/Breadcrumb";
import App from "../../../../app.module.sass";
import StyledButton from "../../component/StyledButton";
const UserList = () => {
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
        
        <UserTable />
      </Container>
    </>
  );
};

export default UserList;

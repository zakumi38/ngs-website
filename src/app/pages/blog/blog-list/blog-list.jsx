import {
  Container,
  Breadcrumbs,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import App from "../../../../app.module.sass";
import postListStyle from "./blog-list.module.sass";
import PostTable from "./blog-table";

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
        
        <PostTable />
      </Container>
    </>
  );
};

export default UserList;

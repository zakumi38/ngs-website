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
  
  import postListStyle from "./post-list.module.sass";
  import PostTable from "./post-table";
  
  const UserList = () => {
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
          <Grid
            container
            spacing={1}
            sx={{
              minHeight: "60px",
              alignItems: { xs: "center", sm: "normal" },
            }}
          >
            <Grid
              item
              xs={6}
              sm={8}
              sx={{ display: { sm: "flex" }, alignItems: "center", gap: "1rem" }}
            >
              <Typography variant="h4">Dashboard</Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                sx={{ marginLeft: { xs: "3px" } }}
              >
                <Link underline="hover" color="inherit" href="/">
                  Post
                </Link>
                <Typography color="text.primary">Post List</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              sx={{ textAlign: "end", padding: "0 !important" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ height: { sm: "100%" }, marginRight: "5px" }}
              >
                <FontAwesomeIcon className={postListStyle.plus} icon={faPlus} />
                Add Post
              </Button>
            </Grid>
          </Grid>
          <PostTable />
        </Container>
      </>
    );
  };
  
  export default UserList;
  
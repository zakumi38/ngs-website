import React from "react";
import { Container, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
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
            sx={{ display: { sm: "flex" }, alignItems: "center", gap: "1rem" }}
          >
            <Typography variant="h4">Dashboard</Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: "3px" }}>
              <Link underline="hover" color="inherit" href="/">
                User
              </Link>
              <Typography color="text.primary">Edit User</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <EditUserForm />
      </Container>
    </>
  );
};

export default EditUser;

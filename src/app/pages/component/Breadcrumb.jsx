import { Breadcrumbs, Grid, Typography, Link } from "@mui/material";
import React from "react";

import App from "../../../app.module.sass";
const Breadcrumb = ({ children }) => {
  return (
    <>
      <Grid
        container
        className={App.containerGap}
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
    </>
  );
};

export default Breadcrumb;

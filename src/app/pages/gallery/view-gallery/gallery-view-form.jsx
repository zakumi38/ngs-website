import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "../../user/user-list/useAxiosFetch";

const GalleryViewForm = () => {
  const { id } = useParams();

  const [users] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/gallerys/${id}`,
  });
  const labels = ["Title", "Image", "Category", "Date"];
  const newUser = Object.entries(users);
  newUser.pop();
  const navigate = useNavigate();

  return (
    <Grid
      container
      component="form"
      sx={{
        bgcolor: "#fff",
        p: { xs: "20px 10px", sm: "20px" },
        alignItems: "right",
        borderRadius: "10px",
        m: "5rem  0 0 0",
      }}
    >
      <Grid item xs={12} textAlign="center">
        <Typography variant="h5">Gallery</Typography>
      </Grid>

      <Grid
        container
        sx={{
          p: 3,
          justifyContent: "center",
          gap: 5,
        }}
      >
        {newUser?.map((user, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: { xs: "column", sm: "row" },
              "& label": {
                flex: { sm: 2, md: 1 },
                textAlign: { sm: "start", md: "end" },
              },
            }}
          >
            <label htmlFor="outlined-basic">{labels[0 + index]}:</label>
            <TextField
              sx={{
                flex: 8,
                width: { xs: "100%", sm: "auto" },
                "& .MuiOutlinedInput-input": {
                  padding: "14px",
                },
              }}
              disabled
              type="text"
              name={user[0]}
              value={user[1]}
              id="outlined-basic"
              variant="standard"
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        textAlign="center"
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", sm: "end" },
          padding: "20px",
          gap: "20px",

          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ minWidth: "120px" }}
          onClick={() => navigate(`/gallery/`)}
        >
          Go Back
        </Button>

        <Button
          variant="contained"
          sx={{ minWidth: "120px" }}
          onClick={() => navigate(`/gallery/edit/${id}`)}
        >
          Edit Gallery
        </Button>
      </Grid>
    </Grid>
  );
};

export default GalleryViewForm;

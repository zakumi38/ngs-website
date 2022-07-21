import { TextField, Grid, Typography, OutlinedInput, Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../../component/StyledButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../../user/useAxios";
import EventStyle from "./add-events-form.module.sass";
import axios from "axios";
import api from "../../../../mockdatabase/database";
import { upload } from "@testing-library/user-event/dist/upload";
const rolesTitle = [
  {
    value: "Default",
    label: "Please Select Your Role",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Owner",
    label: "Owner",
  },
];

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
});
const UploadTextField = styled("input")({
  minHeight: "61px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "15px",
  margin: "0",
  width: "100%",
});

const AddEventsForm = () => {
  const [input, setInput] = useState({
    title: "",
    location: "",
    src: "",
    date: "",
    time: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const currentdate = new Date();
  console.log(currentdate.toLocaleString().split(","));
  const { title, location, src, date, time, description } = input;
  const handleSubmit = async () => {
    if (title && location && date && time && description) {
      try {
        await api.post("/events", input);
      } catch (error) {
        console.log(error);
      }
      setInput({
        title: "",
        location: "",
        src: "",
        date: "",
        time: "",
        description: "",
      });
    }
    // navigate("/events");
  };
  const handleImgChange = (e) => {
    const uploadFile = e.target.files[0];
    console.log(uploadFile);
    const formData = new FormData();
    formData.append("files", uploadFile);
    api.post("events", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  console.log(input);
  return (
    <Grid
      container
      component="form"
      sx={{
        bgcolor: "rgba(205, 220, 236, 0.8)",
        p: "20px",
        alignItems: "center",
        borderRadius: "10px",
        m: "5rem 0",
      }}
    >
      <Grid item xs={12} sx={{ m: 2 }}>
        <Typography variant="h5">Add New Event</Typography>
      </Grid>
      <Grid
        container
        sx={{
          p: 3,
          justifyContent: "space-around",
          rowGap: "2rem",
        }}
      >
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Event Title"
            variant="outlined"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={11}>
          <UploadTextField
            onChange={handleImgChange}
            type="file"
            accept="image/png, image/jpeg"
          />
          <span></span>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            name="time"
            value={time}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={11}>
          <CustomTextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={11}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", md: "25%" },
              maxWidth: "200px",
            }}
          >
            Add Event
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddEventsForm;

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

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
  // "& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
  //   {
  //     color: "transparent",
  //   },
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

  const [cusInput, setCusInput] = useState({
    dates: "",
    times: "",
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
      setCusInput({
        dates: "",
        times: "",
      });
    }
    navigate("/events");
  };
  // const handleImgChange = (e) => {
  //   const uploadFile = e.target.files[0];
  //   console.log(uploadFile);
  //   const formData = new FormData();
  //   formData.append("files", uploadFile);
  //   api.post("events", formData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  // };
  const handleDate = (e) => {
    const value = e.target.value;
    setCusInput({ ...cusInput, dates: value });
    const x = value.split("-");
    const y = x.shift();
    const z = [...x, y].join("/");
    setInput({
      ...input,
      date: z,
    });
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setCusInput({ ...cusInput, times: value });
    const prefix = value.slice(0, 2);
    const rest = value.slice(2);
    const pm = prefix % 12;
    const zone =
      prefix >= 0 && prefix < 12
        ? `${prefix == 0 ? "12" : prefix}${rest} AM`
        : `${pm === 0 ? "12" : pm}${rest} PM`;

    setInput({
      ...input,
      time: zone,
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
          <CustomTextField type="file" accept="image/png, image/jpeg" />
          <span></span>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            sx={{
              "& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  color: "transparent",
                },
            }}
            value={cusInput.dates}
            type="date"
            label="MM/DD/YYYY"
            name="date"
            onChange={handleDate}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            type="time"
            label="Time"
            name="time"
            value={cusInput.times}
            sx={{
              "& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  color: "transparent",
                },
            }}
            onChange={handleTimeChange}
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

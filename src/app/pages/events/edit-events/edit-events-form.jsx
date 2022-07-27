import { TextField, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../../component/StyledButton";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "../../user/user-list/useAxiosFetch";

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
});

const EditEventsForm = () => {
  const [newValue, setNewValue] = useState({
    title: "",
    location: "",
    src: "",
    date: "",
    time: "",
    description: ""
  });

  const {
    title,
    location,
    src,
    date,
    time,
    description,

  } = newValue;


  const [cusInput, setCusInput] = useState({
    dates: "",
    times: ""
  });

  const { id } = useParams();

  const [events] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/events/${id}`,
  });
  
  useEffect(() => {
    if (events) {

      const [mm, dd, yy] = events.date ? events.date.split('/') : []

      const df = `${yy}-${mm}-${dd}`

      let [hh, min] = events.time ? events.time.split(':') : []

      const prefix = min ? min.split(' ') : ''

      hh = prefix[1] === 'PM' ? Number(hh) + 12 : hh

      const tf = `${hh}:${prefix[0]}`

      console.log(events.date, events.time)

      setCusInput({
        dates: df,
        times: tf
      })

      setNewValue({
        title: events.title,
        location: events.location,
        date:  events.date,
        time: events.time,
        scr: events.src,
        description: events.description

      }); 

    }
  }, [events]);

  const handleDate = (e) => {
    const value = e.target.value;
    setCusInput({ ...cusInput, dates: value, con: false});
    const x = value.split("-");
    const y = x.shift();
    const z = [...x, y].join("/");
    setNewValue({
      ...newValue,
      date: z,
    });
  };
  const handleTime = (e) => {
    const value = e.target.value;
    setCusInput({ ...cusInput, times: value });
    const prefix = value.slice(0, 2);
    const rest = value.slice(2);
    const pm = prefix % 12;
    const zone =
      prefix >= 0 && prefix < 12
        ? `${prefix == 0 ? "12" : prefix}${rest} AM`
        : `${pm === 0 ? "12" : pm}${rest} PM`;

    setNewValue({
      ...newValue,
      time: zone,
    });
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewValue({ ...newValue, [name]: value });
  };

  

 
  console.log(newValue);
  const navigate = useNavigate();
  const handleUpdate = async (e) => {

    e.preventDefault()

    alert(JSON.stringify(newValue))

    await api.put(`/events/${id}`, newValue);
    navigate("/events");
  };
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
        <Typography variant="h5">Update Event</Typography>
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
          <CustomTextField
            // onChange={handleImgChange}
            type="file"
            accept="image/png, image/jpeg"
          />
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
            // name="date"
          onChange={handleDate}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            type="time"
            label="Time"
            // name="time"
            value={cusInput.times}
            sx={{
              "& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
              {
                color: "transparent",
              },
            }}
            onChange={handleTime}
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
            onClick={handleUpdate}
            sx={{
              width: { xs: "100%", md: "25%" },
              maxWidth: "200px",
            }}
          >
            Update Event
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditEventsForm;

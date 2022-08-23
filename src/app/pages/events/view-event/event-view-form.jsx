import {Grid, TextField, Typography, Button} from "@mui/material";
import {styled} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "../../user/user-list/useAxiosFetch";

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
});

const EventViewForm = () => {
  const [newValue, setNewValue] = useState({
    title: "",
    location: "",
    src: "",
    date: "",
    time: "",
    description: "",
  });

  const { title, location, src, date, time, description } = newValue;
  const navigate = useNavigate();

  const [cusInput, setCusInput] = useState({
    dates: "",
    times: "",
  });

  const { id } = useParams();

  const [events] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/events/${id}`,
  });

  useEffect(() => {
    if (events) {
      console.log(events.date);
      const [mm, dd, yy] = events.date ? events.date.split("/") : [];

      const df = `${yy}-${mm}-${dd}`;
      console.log(df);
      let [hh, min] = events.time ? events.time.split(":") : [];

      const prefix = min ? min.split(" ") : "";

      hh = prefix[1] === "PM" ? Number(hh) + 12 : hh;

      const tf = `${hh}:${prefix[0]}`;

      console.log(events.date, events.time);

      setCusInput({
        dates: df,
        times: tf,
      });

      setNewValue({
        title: events.title,
        location: events.location,
        date: events.date,
        time: events.time,
        scr: events.src,
        description: events.description,
      });
    }
  }, [events]);

  return (
    <Grid
      container
      component="form"
      sx={{
        bgcolor: "white",
        p: "20px",
        alignItems: "center",
        borderRadius: "10px",
        m: "5rem 0",
      }}
    >
      <Grid item xs={12} sx={{ m: 2 }}>
        <Typography variant="h5">View Event</Typography>
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
           InputProps={{
            readOnly: true,
          }}
            id="outlined-basic"
            label="Event Title"
            variant="outlined"
            name="title"
            value={title}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            name="location"
            value={location}
            InputProps={{
                readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={11}>
          
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
             id="outlined-basic"
             label="Date"
             variant="outlined"
             name="date"
             value={date}
             InputProps={{
                 readOnly: true,
             }}
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
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={11}>
          <CustomTextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            value={description}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={11}
          sx={{ display: "flex", justifyContent: "end", gap: "20px" }}
        >
          <Button
            color="error"
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "25%", md: "18%", lg: "15%" },
              minHeight: "50px",
              minWidth: "100px",
            }}
            onClick={() => navigate("/events")}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventViewForm;

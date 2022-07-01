import { TextField, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

import MenuItem from "@mui/material/MenuItem";

const currencies = [
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

const items = [
  "Username",
  "FirstName",
  "MobileNumber",
  "LastName",
  "Email Address",
  "Password",
];

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
});

const EditUserForm = () => {
  const [user, setUser] = React.useState("Default");

  const handleChange = (event) => {
    setUser(event.target.value);
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
        m: "20px 0",
      }}
    >
      <Grid item xs={12} sx={{ m: 3 }}>
        <Typography variant="h5">Edit User</Typography>
      </Grid>
      <Grid
        container
        sx={{
          p: 3,
          justifyContent: "space-around",
          gap: 5,
        }}
      >
        {items.map((item, index) => {
          return (
            <Grid item xs={12} sm={5}>
              <CustomTextField
                key={index}
                id="outlined-basic"
                label={item}
                variant="outlined"
              />
            </Grid>
          );
        })}

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{ width: { xs: "100%", sm: "92.5%" } }}
            id="outlined-select-currency"
            select
            label="Select"
            value={user}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid
          item
          xs={12}
          sm={11}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", sm: "25%", md: "18%", lg: "15%" },
              minHeight: "50px",
              minWidth: "100px",
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditUserForm;

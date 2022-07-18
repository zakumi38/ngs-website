import { TextField, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../../component/StyledButton";
import useAxios, { instance } from "../useAxios";

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

const AddUserForm = () => {
  const [input, setInput] = useState({
    userName: "",
    firstName: "",
    mobile: "",
    lastName: "",
    emailAddress: "",
    password: "",
    roles: "",
    status : 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const {
    userName,
    firstName,
    mobile,
    lastName,
    emailAddress,
    password,
    roles,
  } = input;
  const handleSubmit = async () => {
    if (
      userName &&
      firstName &&
      mobile &&
      lastName &&
      emailAddress &&
      password &&
      roles
    ) {
      try {
        await instance.post("/users", input);
      } catch (error) {
        console.log(error);
      }
      setInput({
        userName: "",
        firstName: "",
        mobile: "",
        lastName: "",
        emailAddress: "",
        password: "",
        roles: "",
      });
    }
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
        <Typography variant="h5">Add New User</Typography>
      </Grid>
      <Grid
        container
        sx={{
          p: 3,
          justifyContent: "space-around",
          gap: 5,
        }}
      >
        {/* {items.map((item, index) => {
          return (
            <Grid item xs={12} sm={5}>
              <CustomTextField
                key={index}
                id="outlined-basic"
                label={item}
                variant="outlined"
                name="role"
                onChange={handleChange}
              />
            </Grid>
          );
        })} */}
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            name="mobile"
            value={mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            name="emailAddress"
            value={emailAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{ width: { xs: "100%", sm: "92.5%" } }}
            id="outlined-select-currency"
            select
            label="Select"
            name="roles"
            value={roles}
            onChange={handleChange}
          >
            {rolesTitle.map((option) => (
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
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", md: "25%" },
              maxWidth: "200px",
            }}
          >
            Add user
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddUserForm;

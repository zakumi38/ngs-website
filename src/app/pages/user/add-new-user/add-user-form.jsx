import { TextField, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../../component/StyledButton";
import {instance} from "../useAxios";
import {Navigate, useNavigate} from "react-router-dom";

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
  const navigate = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    firstName: "",
    mobile: "",
    lastName: "",
    emailAddress: "",
    password: "",
    roles: "",
    status: "Active",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const goBack = () =>{
    return navigate("/user")
  }

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
      navigate("/user");
    }
    navigate("/user");
  };

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
          <Button
            variant="contained"
            color="error"
            onClick={()=>goBack()}
            size="small"
            sx={{
              minHeight: "60px",
              minWidth: "150px",
              width: { xs: "100%", md: "25%" },
              maxWidth: { xs: "auto", md: "200px" },
              marginRight: "1rem"
            }}
          >
            Cancle
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              minHeight: "60px",
              minWidth: "150px",
              width: { xs: "100%", md: "25%" },
              maxWidth: { xs: "auto", md: "200px" },
            }}
          >
            Add user
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddUserForm;

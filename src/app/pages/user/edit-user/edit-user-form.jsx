import { TextField, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../../component/StyledButton";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosFetch from "../user-list/useAxiosFetch";
import api from "../../../../mockdatabase/database";

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

const CustomTextField = styled(TextField)({
  width: "100%",
  borderColor: "#000",
});

const EditUserForm = () => {
  const [newValue, setNewValue] = useState({
    userName: "",
    firstName: "",
    mobile: "",
    lastName: "",
    emailAddress: "",
    password: "",
    roles: "",
    status: "Active",
  });
  const {
    userName,
    firstName,
    mobile,
    lastName,
    emailAddress,
    password,
    roles,
    status,
  } = newValue;

  const { id } = useParams();

  const [users] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/users/${id}`,
  });
  useEffect(() => {
    if (users) {
      setNewValue({
        userName: users.userName,
        firstName: users.firstName,
        mobile: users.mobile,
        lastName: users.lastName,
        emailAddress: users.emailAddress,
        password: users.password,
        roles: users.roles,
        status,
      });
    }
  }, [users]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewValue({ ...newValue, [name]: value });
  };
  console.log(newValue);
  const navigate = useNavigate();
  const handleUpdate = async () => {
    await api.put(`/users/${id}`, newValue);
    navigate("/user");
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
        m: "5rem  0 0 0",
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
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="User Name"
            name="userName"
            value={userName}
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="First Name"
            name="firstName"
            value={firstName}
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="Mobile Number"
            value={mobile}
            name="mobile"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="Last Name"
            name="lastName"
            value={lastName}
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="Email Address"
            value={emailAddress}
            name="emailAddress"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CustomTextField
            label="Password"
            value={password}
            name="password"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{ width: { xs: "100%", sm: "92.5%" } }}
            id="outlined-select-currency"
            select
            label="Select"
            value={roles}
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
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{
              width: { xs: "100%", sm: "25%", md: "18%", lg: "15%" },
              minHeight: "50px",
              minWidth: "100px",
            }}
          >
            Update
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditUserForm;

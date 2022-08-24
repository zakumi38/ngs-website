import React from "react";
import {useNavigate} from "react-router-dom";

// Files
import {Button, Divider, Menu, MenuItem, styled, Typography} from "@mui/material";

const ProfileImg = styled("img")((theme) => ({
  width: "40px",
  borderRadius: "50%",
}));

const UserproComp = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const profile = () =>{
    navigate("/user-profile")
    setAnchorEl(null)
  } 
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ProfileImg src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{justifyContent:"center"}}
      >
        <Typography sx={{
            color: "rgba(100,116,139)",
            textAlign:"center",
            padding : "6px 16px" ,
            ":hover":{
                color: "#1e293b"
            }
        }} >Kaung Myat San</Typography>
        <Divider />
        <MenuItem onClick={() => profile()} sx={{
            color: "rgba(100,116,139)",
            textDecoration : "none",
            ":hover":{
                color: "#1e293b"
            }
        }} >Profile</MenuItem>
        <MenuItem onClick={handleClose} sx={{
            color: "rgba(100,116,139)",
            textDecoration : "none",
            ":hover":{
                color: "#1e293b"
            }
        }} >Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserproComp;

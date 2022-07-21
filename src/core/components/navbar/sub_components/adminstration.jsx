import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faUsers } from "@fortawesome/free-solid-svg-icons";

import subComponentStyle from "./sub-component.module.sass";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";


function Adminstration() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const adminstrationRoute = (route) =>{
    navigate(`/${route}`)
    handleClose();
  }

  return (
    <div>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className={subComponentStyle.container}
          sx={{
            color: "black",
          }}
        >
          <FontAwesomeIcon icon={faUsers} />
          <p>Adminstration</p>
          <FontAwesomeIcon
            className={subComponentStyle.arrowIcon}
            icon={faSortDown}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={()=>adminstrationRoute("user")}>
            <Link sx={{
            color: "black",
            textDecoration : "none",
          }} >User Management</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Adminstration;

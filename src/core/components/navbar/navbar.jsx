import React, { useEffect } from "react";
import navBarStyles from "./navbar.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { TextField, Badge, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ navToggle, setToggle }) => {
  const handleOnClick = () => {
    setToggle(!navToggle);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setToggle(false);
    });
  }, [setToggle]);

  return (
    <nav
      className={`${navBarStyles.navbar} 
    ${navToggle ? navBarStyles.active : ""}`}
    >
      <div className={navBarStyles.nav_Toggle}>
        <button onClick={handleOnClick}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>

      <div className={navBarStyles.nav_search}>
        <TextField id="outlined-size-small" label="Search..." size="small" />
        <button className={navBarStyles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className={navBarStyles.navItem}>
        <Badge badgeContent={4} color="primary">
          <FontAwesomeIcon size="md" icon={faBell} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <FontAwesomeIcon size="1x" icon={faEnvelope} />
        </Badge>
        <Link to="/">
          <Avatar
            sx={{ width: "35px", height: "35px", bgcolor: "primary" }}
            src="/broken-image.jpg"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

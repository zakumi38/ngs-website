import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import GitInfo from "react-git-info/macro";

// Files
import sidebar from "./sidebar.module.sass";
import { webContent } from "../../utilities/web-content";
import { Entities } from "../../utilities/entities";
import { setting } from "../../utilities/setting";
import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faXmark,
  faChartSimple,
  faEarthAsia,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// Images
import Logosn from "../../../assets/images/logosn.png";
import Logo from "../../../assets/images/logo.png";

export const BrandLogo = styled("div")(({ theme }) => ({
  // fontSize: '23px'
  // width: '50px',
  height: "52px",
  width: "90%",
  margin: "5px auto",
}));

const SidebarComp = ({ wide, isMatch, slide, slideOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEntities, setOpenEntities] = useState(false);
  const [openWebContent, setOpenWebContent] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const location = useLocation();

  const open = Boolean(anchorEl);

  const toggleSlider = (_) => {
    window.addEventListener("click", showHideNav);
  };

  const showHideNav = (event) => {
    if (
      (openEntities === !true && event.target.id === "ent_btn") ||
      event.target.parentElement.id === "ent_btn" ||
      event.target.parentElement.parentElement.id === "ent_btn"
    ) {
      setOpenEntities(true);
      setOpenWebContent(false);
      setOpenSetting(false);
    } else if (
      (openWebContent === !true && event.target.id === "web_btn") ||
      event.target.parentElement.id === "web_btn" ||
      event.target.parentElement.parentElement.id === "web_btn"
    ) {
      setOpenWebContent(true);
      setOpenEntities(false);
      setOpenSetting(false);
    } else if (
      (openSetting === !true && event.target.id === "set_btn") ||
      event.target.parentElement.id === "set_btn" ||
      event.target.parentElement.parentElement.id === "set_btn"
    ) {
      setOpenSetting(true);
      setOpenEntities(false);
      setOpenWebContent(false);
    } else {
      setOpenEntities(false);
      setOpenWebContent(false);
      setOpenSetting(false);
    }
  };
  const toggleEntities = (event) => {
    if (
      (openEntities === !true && event.target.id === "ent_btn") ||
      event.target.parentElement.id === "ent_btn" ||
      event.target.parentElement.parentElement.id === "ent_btn"
    ) {
      setOpenEntities(true);
      setOpenWebContent(false);
      setOpenSetting(false);
    }
  };
  const toggleWebContent = (event) => {
    console.log(event.target);

    if (
      (openWebContent === !true && event.target.id === "web_btn") ||
      event.target.parentElement.id === "web_btn" ||
      event.target.parentElement.parentElement.id === "web_btn"
    ) {
      setOpenWebContent(true);
      setOpenEntities(false);
      setOpenSetting(false);
    } 
  };

  const toggleSetting = (event) => {
    console.log(event.target.id);

    if (
      (openSetting === !true && event.target.id === "set_btn") ||
      event.target.parentElement.id === "set_btn" ||
      event.target.parentElement.parentElement.id === "set_btn"
    ) {
      setOpenSetting(true);
      setOpenEntities(false);
      setOpenWebContent(false);
    } 
  };

  const gitInfo = GitInfo();
  return (
    <>
      <Box
        component="aside"
        className={`${sidebar.sidebar} ${wide && sidebar.newSidebar} ${
          isMatch && sidebar.slide_remove
        } ${slide && sidebar.slide_in}`}
      >
        {/* LOGO Session Start */}

        <Box>
          {/* Side Header Session */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: "10px", position: "relative", marginTop: 0 }}
            justifyContent="center"
          >
            {/* LOGO Session */}

            <BrandLogo>
              <Link href="/" className={sidebar.logo}>
                <img
                  src={wide ? Logosn : Logo}
                  alt=""
                  className={sidebar.logoImg}
                />
              </Link>
            </BrandLogo>

            {/* Close Button Session */}

            {isMatch && (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={slideOut}
                className={sidebar.closeNav}
              />
            )}
          </Stack>
        </Box>

        {/* Slide Menu Session Start */}

        <Box className={sidebar.sideMenuContainer}>
          <Box className={sidebar.sideMenuContent}>
            {/* Sidebar Menu Session */}

            <List>
              <h3
                id="ent_btn"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleEntities}
                className={sidebar.listItemsHeader}
                style={{margin: 0}}
              >
                {wide ? <FontAwesomeIcon icon={faChartSimple} /> : "Entities"}

                {!wide &&
                  (openEntities ? (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretUp}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretDown}
                    />
                  ))}
              </h3>
              <div>
                {openEntities
                  ? Entities.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={
                          !wide
                            ? { px: "5px", py: "3px" }
                            : { px: 0, py: "3px" }
                        }
                      >
                        <NavLink
                        to={item.path}
                          // href={item.path}
                          className={`${sidebar.listItems} ${
                            wide && sidebar.newItems
                          } ${
                            location.pathname === item.path
                              ? sidebar.active
                              : ""
                          }`} style={{margin: 0}}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={sidebar.icons}
                          />
                          <Box
                            component="span"
                            sx={{
                              ml: "5px",
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              textTransform: "none",
                            }}
                            className={wide && sidebar.d_none}
                          >
                            {" "}
                            {item.title}{" "}
                          </Box>
                        </NavLink>
                      </ListItem>
                    ))
                  : null}
              </div>
            </List>

            <List>
              <h3
                id="web_btn"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleWebContent}
                className={sidebar.listItemsHeader}
                style={{margin: 0}}
              >
                {wide ? <FontAwesomeIcon icon={faEarthAsia} /> : "Web Content"}

                {!wide &&
                  (openWebContent ? (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretUp}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretDown}
                    />
                  ))}
              </h3>
              <div id="webContentMenu" className={sidebar.dropDownMenu}>
                {openWebContent
                  ? webContent.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={
                          !wide
                            ? { px: "5px", py: "3px" }
                            : { px: 0, py: "3px" }
                        }
                      >
                        <NavLink
                          to={item.path}
                          className={`${sidebar.listItems} ${
                            wide && sidebar.newItems
                          } ${
                            location.pathname === item.path
                              ? sidebar.active
                              : ""
                          }`} style={{margin: 0}}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={sidebar.icons}
                          />
                          <Box
                            component="span"
                            sx={{
                              ml: "5px",
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              textTransform: "none",
                            }}
                            className={wide && sidebar.d_none}
                          >
                            {" "}
                            {item.title}{" "}
                          </Box>
                        </NavLink>
                      </ListItem>
                    ))
                  : ""}
              </div>
            </List>

            <List>
              <h3
                id="set_btn"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleSetting}
                className={sidebar.listItemsHeader}
                style={{margin: 0}}
              >
                {wide ? (
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                ) : (
                  "Settings"
                )}

                {!wide &&
                  (openSetting ? (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretUp}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={sidebar.icon}
                      icon={faCaretDown}
                    />
                  ))}
              </h3>
              <div>
                {openSetting
                  ? setting.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={
                          !wide
                            ? { px: "5px", py: "3px" }
                            : { px: 0, py: "3px" }
                        }
                      >
                        <NavLink
                          to={item.path}
                          className={`${sidebar.listItems} ${
                            wide && sidebar.newItems
                          } ${
                            location.pathname === item.path
                              ? sidebar.active
                              : ""
                          }`} style={{margin: 0}}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={sidebar.icons}
                          />
                          <Box
                            component="span"
                            sx={{
                              ml: "5px",
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              textTransform: "capitalize",
                            }}
                            className={wide && sidebar.d_none}
                          >
                            {" "}
                            {item.title}{" "}
                          </Box>
                          <FontAwesomeIcon
                            icon={item.down}
                            className={`${sidebar.endIcon} ${
                              wide && sidebar.d_none
                            }`}
                          />
                        </NavLink>
                      </ListItem>
                    ))
                  : ""}
              </div>
            </List>
          </Box>
        </Box>
        <Box>
          {
            !wide && <Typography className={sidebar.versionNo}>
            ver : {gitInfo.commit.shortHash}
          </Typography>
          }
        </Box>
      </Box>
    </>
  );
};

export default SidebarComp;

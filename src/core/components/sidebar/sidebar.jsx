import React, {useState} from "react";
import {useLocation} from 'react-router-dom'
import GitInfo from 'react-git-info/macro';

// Files
import sidebar from "./sidebar.module.sass";
import {webContent} from "../../utilities/web-content";
import {Entities} from "../../utilities/entities";
import {setting} from "../../utilities/setting";
import {Box, Link, List, ListItem, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp, faXmark,} from "@fortawesome/free-solid-svg-icons";

// Images
import Logo from "../../../assets/images/logo.png";

export const BrandLogo = styled("div")(({ theme }) => ({
  // fontSize: '23px'
}));



const SidebarComp = ({ wide, isMatch, slide, slideOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openWebContent, setOpenWebContent] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const location = useLocation()

  const open = Boolean(anchorEl);
  const toggleWebContent = (event) => {
    if (openWebContent === true) {
      setOpenWebContent(false);
    } else {
      setOpenWebContent(true);
    }
  };

  const toggleSetting = () => {
    if (openSetting === true) {
      setOpenSetting(false);
    } else {
      setOpenSetting(true);
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
            sx={{ mt: "10px", position: "relative" }}
            justifyContent="center"
          >
            {/* LOGO Session */}

            <BrandLogo>
              <Link href="/">
                <img src={Logo} alt="" className={sidebar.logoImg} />
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
              <h3 className={sidebar.listItemsHeader}>Entities</h3>
              {Entities.map((item) => (
                <ListItem
                  key={item.id}
                  sx={!wide ? { px: "5px", py: "3px" } : { px: 0, py: "3px" }}
                >
                  <a
                    href={item.path}
                    className={`${sidebar.listItems} ${
                      wide && sidebar.newItems
                    } ${ location.pathname === item.path ? sidebar.active : '' }`}
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
                  </a>
                </ListItem>
              ))}
            </List>

            <List>
              <h3
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleWebContent}
                className={sidebar.listItemsHeader}
              >
                Web Content
                {openWebContent ? (
                  <FontAwesomeIcon className={sidebar.icon} icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon
                    className={sidebar.icon}
                    icon={faCaretDown}
                  />
                )}
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
                        <a
                          href={item.path}
                          className={`${sidebar.listItems} ${
                            wide && sidebar.newItems
                          } ${ location.pathname === item.path ? sidebar.active : '' }`}
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
                        </a>
                      </ListItem>
                    ))
                  : ""}
              </div>
            </List>

            <List>
              <h3
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleSetting}
                className={sidebar.listItemsHeader}
              >
                Setting
                {openSetting ? (
                  <FontAwesomeIcon className={sidebar.icon} icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon
                    className={sidebar.icon}
                    icon={faCaretDown}
                  />
                )}
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
                        <a
                          href={item.path}
                          className={`${sidebar.listItems} ${
                            wide && sidebar.newItems
                          } ${ location.pathname === item.path ? sidebar.active : '' }`}
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
                          <FontAwesomeIcon
                            icon={item.down}
                            className={`${sidebar.endIcon} ${
                              wide && sidebar.d_none
                            }`}
                          />
                        </a>
                      </ListItem>
                    ))
                  : ""}
              </div>
            </List>
          </Box>
        </Box>
        <Box>
          <Typography sx={{textAlign: "center"}}>{gitInfo.commit.shortHash}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SidebarComp;

import React from "react";
import { sideMenu } from "../../utilities/side-bar-data";
import { Box, Link, Stack, Typography, List, ListItem } from "@mui/material";
import styled from "@emotion/styled";
import sidebar from "./sidebar.module.sass";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

export const BrandLogo = styled("div")(({ theme }) => ({
  // fontSize: '23px'
}));

// export const UserImg = styled('div')(({ theme }) => ({

//     width: '80px',
//     height: '80px',
//     fontSize: '30px',
//     margin: '20px auto 5px',
//     color: '#333',
//     borderRadius: '50%',
//     overflow: 'hidden'

// }))

const SidebarComp = ({ wide, isMatch, slide, slideOut }) => {
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
                {/* <img src={!wide ? "https://colorlib.com/polygon/nalika/img/logo/logo.png" : "https://colorlib.com/polygon/nalika/img/logo/logosn.png"} alt="" className={sidebar.logoImg} /> */}
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

          {/* User Session */}

          {/* <Stack direction='column' alignItems='center'>
                        <Link href='' display='block'>
                            <UserImg className={wide && sidebar.newLogo}>
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            </UserImg>
                        </Link>
                        <Typography variant='subtitle2' sx={{ my: '10px', fontWeight: 'bold' }}> {!wide && "NGS -"} <span> Admin </span> </Typography>
                    </Stack> */}

          {/* Social Icon Session */}

          {/* <Stack direction='row' spacing={4} justifyContent='center' sx={{ mt: '5px' }} className={`${wide && 'd_none'}`}>
                        <Link href="https://fb.com/zawlinn-profile" >
                            <FontAwesomeIcon icon={faFacebookF} className={sidebar.social_icons} />
                        </Link>
                        <Link href="http://fb.com/zawlinn-profile">
                            <FontAwesomeIcon icon={faTwitter} className={sidebar.social_icons} />
                        </Link>
                        <Link href="http://fb.com/zawlinn-profile">
                            <FontAwesomeIcon icon={faLinkedin} className={sidebar.social_icons} />
                        </Link>
                    </Stack> */}
        </Box>

        {/* Slide Menu Session Start */}

        <Box sx={{ mt: "18px" }} className={sidebar.sideMenuContainer}>
          <Box className={sidebar.sideMenuContent}>
            {/* Sidebar Menu Session */}

            <List>
              {sideMenu.map((item) => (
                <ListItem
                  key={item.id}
                  sx={!wide ? { px: "5px", py: "3px" } : { px: 0, py: "3px" }}
                >
                  <a
                    href={item.path}
                    className={`${sidebar.listItems} ${
                      wide && sidebar.newItems
                    }`}
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
                      className={`${sidebar.endIcon} ${wide && sidebar.d_none}`}
                    />
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarComp;

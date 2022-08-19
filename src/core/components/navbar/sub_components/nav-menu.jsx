import React from "react";
import { Stack} from "@mui/material";
import UserproComp from "./user-profile";
import Adminstration from "./adminstration";
import Home from "./home";

const NavMenuComp = () => {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Home />
        <Adminstration />
        <UserproComp />
      </Stack>
    </>
  );
};

export default NavMenuComp;

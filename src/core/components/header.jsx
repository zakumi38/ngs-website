import React from "react";
import SidebarComp from "./sidebar/sidebar";
import NavbarComp from "./navbar/navbar";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const HeaderComp = ({ wide, setWide }) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [slide, setSlide] = useState(false);

  const handleWide = () => {
    if (!wide && !isMatch) {
      setWide(true);
    } else {
      setWide(false);
    }
  };

  const slideIn = () => {
    setSlide(true);
  };

  const slideOut = () => {
    setSlide(false);
  };

  return (
    <>
      {/* {!isMatch && <SidebarComp wide={wide} />} */}
      <SidebarComp
        wide={wide}
        isMatch={isMatch}
        slide={slide}
        slideOut={slideOut}
      />
      <NavbarComp
        wide={wide}
        handleWide={handleWide}
        isMatch={isMatch}
        slide={slide}
        slideIn={slideIn}
      />
    </>
  );
};

export default HeaderComp;

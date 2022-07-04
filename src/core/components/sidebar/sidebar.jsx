import React, { useState } from "react";
import { Link } from "react-router-dom";

import sideStyle from "./sidebar.module.sass";
import useBarData from "./useBarData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ navToggle }) => {
  const { sideBarData } = useBarData();
  const [selected, setSelected] = useState(0);

  const handleClick = (idx) => {
    return () => setSelected(idx);
  };

  return (
    <div
      className={`${sideStyle.side} 
    ${navToggle ? sideStyle.active : ""}`}
    >
      <Link to="/" className={sideStyle.side_logo}>
        <p>VS</p>
      </Link>

      <div className={sideStyle.side_menu}>
        {sideBarData &&
          sideBarData.map((data, index) => {
            return (
              <Link
                onClick={handleClick(index)}
                className={selected === index ? sideStyle.link_active : ""}
                key={index}
                to={data.path}
              >
                <FontAwesomeIcon icon={data.icon} />
                <span className={sideStyle.side_menu_text}>{data.header}</span>
              </Link>
            );
          })}
      </div>

      <div className={sideStyle.side_bottom}>
        <FontAwesomeIcon icon={faSun} />
      </div>
    </div>
  );
};

export default Sidebar;

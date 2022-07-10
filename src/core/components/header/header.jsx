import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faCircleQuestion,
  faPaperPlane,
  faRocket,
  faFileText,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import HeaderStyle from "./header.module.sass";
import fbmessenger from "../../../assets/messeger.png";


library.add(
  faMagnifyingGlass,
  faCircleQuestion,
  faPaperPlane,
  faRocket,
  faFileText,
  faPhone
);

function Header() {
 
  //refresh the page when screen size change
  window.addEventListener("resize", function () {
    "use strict";
    window.location.reload();
  });
  //

  const [active, setActive] = useState(HeaderStyle.left_sidebar);
  const [close, setClose] = useState(HeaderStyle.nav_toggler);
  const navToggle = () => {
    active === HeaderStyle.left_sidebar
      ? setActive(
          `${HeaderStyle.left_sidebar} ${HeaderStyle.left_sidebar_active}`
        )
      : setActive(HeaderStyle.left_sidebar);

    setClose(!close);
  };

  const [sideactive, setSideactive] = useState(HeaderStyle.right_sidebar);
  const [closeSide, setCloseSide] = useState(HeaderStyle.side_toggler);
  const sideToggle = () => {
    sideactive === HeaderStyle.right_sidebar
      ? setSideactive(
          `${HeaderStyle.right_sidebar} ${HeaderStyle.right_sidebar_active}`
        )
      : setSideactive(HeaderStyle.right_sidebar);

    setCloseSide(!closeSide);
  };

  return (
    <div>
      {/* Navbar start */}

      <div className={HeaderStyle.page_title}>
        <div className={HeaderStyle.title_wrapper}>
          <div className={HeaderStyle.navBar}>
            <div className={HeaderStyle.brand}>
              <a href="/" className={HeaderStyle.logo}>
                <span className={HeaderStyle.logo_text}>
                  <strong>VS</strong>
                  GROUP
                </span>
              </a>
            </div>
            <div className={HeaderStyle.top_nav}>
              <ul className={HeaderStyle.nav}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/team-list">Team</a>
                </li>
                <li>
                  <a href="/service">Services</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={HeaderStyle.toggle_menu_wrapper}>
              <div className={HeaderStyle.toggle_menu} onClick={navToggle}>
                <div
                  className={
                    close
                      ? `${HeaderStyle.nav_toggler}`
                      : `${HeaderStyle.nav_close_toggler}`
                  }
                >
                  <div className={HeaderStyle.line_wrapper}>
                    <div className={HeaderStyle.line1}></div>
                    <div className={HeaderStyle.line2}></div>
                    <div className={HeaderStyle.line3}></div>
                  </div>
                </div>
              </div>
              <div className={HeaderStyle.side_menu} onClick={sideToggle}>
                <div
                  className={
                    closeSide
                      ? `${HeaderStyle.side_toggler}`
                      : `${HeaderStyle.side_close_toggler}`
                  }
                >
                  <div className={HeaderStyle.line_wrapper}>
                    <div className={HeaderStyle.line1}></div>
                    <div className={HeaderStyle.line2}></div>
                    <div className={HeaderStyle.line3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={HeaderStyle.breadcumbBar}></div>
        </div>
      </div>
      {/* Navbar end */}

      {/* left_navbar start */}
      <div className={active}>
        <div className={HeaderStyle.leftSide_topWrapper}></div>
        <nav className={HeaderStyle.leftSide_nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* left_navbar end */}

      {/* right sidebar start */}
      <div className={sideactive}>
        <nav className={HeaderStyle.rightSide_nav}>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className={HeaderStyle.rightnav_icons}
                  icon={faCircleQuestion}
                ></FontAwesomeIcon>
                <span>Faq</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className={HeaderStyle.rightnav_icons}
                  icon={faPaperPlane}
                ></FontAwesomeIcon>
                <span>Submit a ticket</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className={HeaderStyle.rightnav_icons}
                  icon={faRocket}
                ></FontAwesomeIcon>
                <span>Terms of use</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className={HeaderStyle.rightnav_icons}
                  icon={faFileText}
                ></FontAwesomeIcon>
                <span>Terms of service</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className={HeaderStyle.rightnav_icons}
                  icon={faPhone}
                ></FontAwesomeIcon>
                <span>Call me back</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={HeaderStyle.rightSide_nav_bottom}>
          <img src={fbmessenger} alt="" />
          <a href="#">
            facebook <br /> messenger
          </a>
        </div>
      </div>
      {/* right sidebar end */}
    </div>
  );
}

export default Header;

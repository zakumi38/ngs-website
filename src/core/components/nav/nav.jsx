import React from "react";
import NavStyle from "./nav.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className={NavStyle.navContainer}>
      <div className={NavStyle.leftside}>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon
                icon={faPhone}
                className={NavStyle.phoneIcon}
              ></FontAwesomeIcon>{" "}
            </span>

            <span>
              {" "}
              <a href="#" className={NavStyle.text}>
                800 - 123-45-67
              </a>{" "}
            </span>
          </li>

          <li>
            <span>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={NavStyle.penIcon}
              ></FontAwesomeIcon>{" "}
            </span>

            <span>
              {" "}
              <a href="#" className={NavStyle.text}>
                MAXICOM@EXAMPLE.COM
              </a>{" "}
            </span>
          </li>
        </ul>
      </div>

      <div className={NavStyle.rightside}>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon
                icon={faComment}
                className={NavStyle.commentIcon}
              ></FontAwesomeIcon>
            </span>

            <span>
              <a href="#" className={NavStyle.text}>
                REQUEST A QUOTE
              </a>
            </span>
          </li>

          <li>
            <span>
              <FontAwesomeIcon
                icon={faUser}
                className={NavStyle.userIcon}
              ></FontAwesomeIcon>{" "}
            </span>

            <span>
              <a href="#" className={NavStyle.text}>
                LOGIN IN / SIGN UP
              </a>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

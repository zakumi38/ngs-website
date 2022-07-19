import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import subComponentStyle from './sub-component.module.sass'


function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div  onClick={() => navigate('/')} className={subComponentStyle.container}>
        <FontAwesomeIcon className={subComponentStyle.homeIcon} icon={faHome} />
        <p  >Home</p>
      </div>
    </div>
  );
}

export default Home;

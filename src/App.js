import Sidebar from "./core/components/sidebar/sidebar";
import Navbar from "./core/components/navbar/navbar";
import React, { useState } from "react";
import "./app.sass";
import Home from "./core/components/home/home";

function App() {
  const [navToggle, setToggle] = useState(false);

  return (
    <div className="app">
      <Sidebar navToggle={navToggle}></Sidebar>
      <Navbar navToggle={navToggle} setToggle={setToggle}></Navbar>

      <Home navToggle={navToggle}>
        Hello
        {/* Router configure */}
      </Home>
    </div>
  );
}

export default App;

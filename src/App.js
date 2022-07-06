import React, { useState } from "react";
import "./app.sass";
import Header from './core/components/header'

function App() {
  const [navToggle, setToggle] = useState(false);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;

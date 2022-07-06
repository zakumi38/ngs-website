import React, { useState } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import View from "./setup/routes-manager/view";
import Header from './core/components/header'


function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <View />
      </Router>

    </div>
  );
}

export default App;

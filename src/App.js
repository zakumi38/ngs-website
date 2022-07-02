import Sidebar from './core/components/sidebar/sidebar';
import Navbar from './core/components/navbar/navbar';
import React, {useState} from 'react'
import './app.sass'

function App() {
  const [navToggle, setToggle] = useState(false)

  return (
    <div className="app">
           <Sidebar navToggle={navToggle}></Sidebar>
           <Navbar navToggle={navToggle} setToggle={setToggle}></Navbar>
    </div>
  );
}

export default App;

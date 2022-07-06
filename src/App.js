import React from "react";
import View from "./setup/routes-manager/view";
import Header from './core/components/header'
import Style from './app.module.sass'

function App() {

  return (
    <div className={`{App} {Style.app}`}>
        <Header className={Style.header} />
        <div className={Style.conatiner}>
         <View />
        </div>
    </div>
  );
}

export default App;

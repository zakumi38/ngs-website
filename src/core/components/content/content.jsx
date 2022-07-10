import React from "react";
import ContentStyle from "./content.module.sass";

function ContentComponent() {
  return (
    <div className={ContentStyle.container}>
      <div className={ContentStyle.box}>
        <h2 className={ContentStyle.header}>Hello World</h2>
        <p className={ContentStyle.paragraph}>
          This will be Dynamic Content in Next Week !!!!
        </p>
      </div>
    </div>
  );
}

export default ContentComponent;

import React, {  useState } from "react";
import View from "./setup/routes-manager/view";
import Header from "./core/components/header";
import Style from "./app.module.sass";
import { Box, Container } from "@mui/material";
import sidebar from "./core/components/sidebar/sidebar.module.sass";
import styled from "@emotion/styled";

const DynamicContainer = styled(Box)({});

function App() {
  const [wide, setWide] = useState(false);

  return (
    <div className={`{App} {Style.app}`}>
      <Header className={Style.header} wide={wide} setWide={setWide} />
      <Box
        component="section"
        sx={{
          marginLeft: { md: wide ? "64px" : "240px", sm: 0 },
          transition: "all .3s linear",
        }}
      >
        <View />
      </Box>
    </div>
  );
}
export default App;

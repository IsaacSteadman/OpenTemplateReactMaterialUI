import * as React from "react";
import { render } from "react-dom";

import { Toolbar, AppBar, Button } from "@mui/material";

const App = () => (
  <div>
    this is a React App
    <AppBar position="static">
      <Toolbar>Hello world</Toolbar>
      <Toolbar>Another toolbar</Toolbar>
    </AppBar>
    <Button>Nope</Button>
  </div>
);

document.addEventListener("DOMContentLoaded", function () {
  const div = document.getElementById("container") as HTMLDivElement;
  render(<App />, div);
});

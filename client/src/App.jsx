import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;

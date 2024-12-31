import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Componets/Home/Navbar";
import Footer from "./Componets/Home/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;

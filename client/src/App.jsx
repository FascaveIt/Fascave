import React from "react";
import { Outlet } from "react-router-dom";


import Footer from "./Componets/Home/Footer";
import Navbar from "./Componets/Home/Navbar/Navbar";
import Whatsaap from "./Componets/Home/Whatsaap";
import UpperArrow from "./Componets/UpperArrow/UpperArrow";
import ScrollToTop from "./Pages/RouteSetup";
function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Whatsaap/>
      <UpperArrow/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

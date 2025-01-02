import React from "react";
import { Outlet } from "react-router-dom";


import Footer from "./Componets/Home/Footer";
import Navbar from "./Componets/Home/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Componets/contact/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminData from "./Componets/AdminSection/AdminData.jsx";
import Services from "./Pages/Services.jsx";
import About_Us from "./Pages/About_Us.jsx";

import HeroSec from "./Componets/Home/heroSec/HeroSec.jsx";
import NotFound from "./Pages/NotFound.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/contact",
        element: <Contact />,
      },

      { path: "/services", element: <Services /> },
      { path: "/about_us", element: <About_Us /> },
      { path: "/herosec", element: <HeroSec /> },

      {
        path: "/Admin/utkarsh",
        element: <AdminData />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);

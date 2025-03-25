import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Componets/contact/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import About_Us from "./Pages/About_Us.jsx";

import NotFound from "./Pages/NotFound.jsx";
import WebDevService from './Pages/WebDevService.jsx';
import AppDevService from './Pages/AppDevService.jsx';
import DigitalMarketingService from './Pages/DigitalMarketingService.jsx';
import CloudService from './Pages/CloudService.jsx';
import PowerAndBi from './Pages/PowerAndBi.jsx';
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

      
      { path: "/about_us", element: <About_Us /> },
      { path: "/services/web-development", element: <WebDevService /> },
      { path: "/services/app-development", element: <AppDevService /> },
      { path: "/services/digital-marketing", element: <DigitalMarketingService /> },
      { path: "/services/cloud-data-analytics", element: <CloudService /> },
      { path: "/services/Power&BI", element: <PowerAndBi /> },





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

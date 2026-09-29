import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

/* Page switching (interfaces only — no routing, Phase 2):
   Uncomment the page you want to show in BOTH places below
   (the import and the render) and comment out the others. */
import Landing from "./components/Landing.jsx";
import Auth from "./components/Auth.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* The visible page — switch it together with the imports above */}
    {/* <Landing /> */}
    {/* <Auth /> */}
    {/* <AdminDashboard /> */}
  </React.StrictMode>
);
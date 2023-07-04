import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//import StudentsPage from "./pages/StudentsPage";
//import ClassesPage from "./pages/ClassesPage";
//import StaffHome from "./pages/StaffHomePage";
//import RecordsPage from "./pages/RecordsPage";
//import StatisticsPage from "./pages/StatisticsPage";
//import SettingsPage from "./pages/SettingsPage";
//import ResourcesPage from "./pages/ResourcesPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

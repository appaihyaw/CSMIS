import React from "react";
import {
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//import Dropdown from "./Dropdown";
//import Login from "./components/Login";

//pages import
import GenHome from "./pages/GenHome";
import Log from "./pages/Log";
import StudHome from "./pages/StudHomePage";
import RootLayout from "./Layouts/RootLayout";
import StaffHome from "./pages/StaffHomePage";
import Students from "./pages/StudentsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<GenHome />} />
      <Route path="Log" element={<Log />} />
      <Route path="StaffHomePage" element={<StaffHome />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

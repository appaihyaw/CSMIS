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
import StaffHome from "./pages/staff Pages/StaffHomePage";
import StudentsPage from "./pages/staff Pages/StudentsPage";
import StaffLayout from "./Layouts/RootLayout";
import ClassesPage from "./pages/staff Pages/StaffClassesPage";
import StaffStatsPage from "./pages/staff Pages/StaffStatsPage";
import RecordsPage from "./pages/staff Pages/RecordsPage";
import SettingsPage from "./pages/SettingsPage";
import ResourcesPage from "./pages/staff Pages/ResourcesPage";
import CourseRegPage from "./pages/student Pages/CourseRegPage";
import StudCoursesPage from "./pages/student Pages/StudCoursesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<GenHome />} />
      <Route path="Log" element={<Log />} />
      <Route path="StaffHomePage" element={<StaffHome />}></Route>
      <Route path="StudentsPage" element={<StudentsPage />} />
      <Route path="ClassesPage" element={<ClassesPage />} />
      <Route path="StudHomePage" element={<StudHome />} />
      <Route path="StaffStatsPage" element={<StaffStatsPage />} />
      <Route path="RecordsPage" element={<RecordsPage />} />
      <Route path="SettingsPage" element={<SettingsPage />} />
      <Route path="ResourcesPage" element={<ResourcesPage />} />
      <Route path="StudCoursesPage" element={<StudCoursesPage />} />
      <Route path="CourseRegPage" element={<CourseRegPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

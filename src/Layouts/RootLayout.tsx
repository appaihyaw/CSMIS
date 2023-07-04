import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Search bar</h1>
          <NavLink to="SettingsPage">SettingsPage</NavLink>
          <NavLink to="UserProfilePage">UserProfilePage</NavLink>
          <NavLink to="Log">Log</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

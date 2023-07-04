import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Log from "./Log";

export default function GenHome() {
  return (
    <div>
      <header>
        <nav className="container flex justify-around py-8 mx-auto bg-white">
          <div>
            <h3 className="text-2xl font-medium text-blue-500">CsMIS</h3>
          </div>
          <div className="space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="Log">Login</NavLink>
            <NavLink to="StaffHomePage">Staff Home</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

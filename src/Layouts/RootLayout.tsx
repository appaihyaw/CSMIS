import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className=" flex justify-center pl-5 pt-4 text-2xl font-medium text-blue-500 space-x-2">
          <h3>csMIS</h3>
          <img
            src=" https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png"
            width="60"
            height="80"
            alt="uglogo"
          />
        </div>
        <nav className="container pb-2 mx-auto">
          <div className=" flex justify-between">
            <div className=" order-1">
              <svg viewBox="0 0 100 80" width="20" height="20" className=" ">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </div>
            <div className=" order-2 space-x-4 ">
              <NavLink to="GenHome">Home</NavLink>
              <NavLink to="Log">Login</NavLink>
              <NavLink to="StaffHomePage">Staff Home</NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

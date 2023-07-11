import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Log from "./Log";
import StaffHome from "./staff Pages/StaffHomePage";

export default function GenHome() {
  return (
    <div>
      <header>
        <nav className="container pt-2 mx-auto">
          <div className=" flex justify-between">
            <div className=" order-1"></div>
            <div className=" order-2 space-x-4 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="Log">Login</NavLink>
              <NavLink to="StaffHomePage">Staff Homepage</NavLink>
              <NavLink to="StudHomePage">Student Homepage</NavLink>
            </div>
          </div>
        </nav>

        <div className=" flex justify-center pl-5 pb-4 text-2xl font-medium text-blue-500 space-x-1">
          <h3>csMIS</h3>
          <img
            src=" https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png"
            width="80"
            height="60"
            alt="uglogo"
          />
        </div>
      </header>
      <div className="">
        <main>
          <div className=" flex bg-indigo-800 text-white pl-20">
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Academics</li>
              </ul>
            </div>

            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Research</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Library</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>International Programmes</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900 pl-20">
              <ul>
                <li>Freshmen info</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-cente ">
            <img src=" ug main2.jpeg" alt="" width={2000} height="100" />
          </div>
        </main>
      </div>
    </div>
  );
}

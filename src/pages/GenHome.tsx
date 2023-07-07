import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Log from "./Log";

export default function GenHome() {
  return (
    <div>
      <div className="">
        <main>
          <Outlet />
          <div className=" flex bg-indigo-800 text-white">
            <div className=" flex-1">
              <ul>
                <li></li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li>Academics</li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li></li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li>Research</li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li>Library</li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li>International Programmes</li>
              </ul>
            </div>
            <div className=" flex-1">
              <ul>
                <li>Freshmen info</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center">
            <img src=" ug main2.jpeg" alt="" width={2000} height="100" />
          </div>
        </main>
      </div>
    </div>
  );
}

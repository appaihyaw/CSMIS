import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Log from "./Log";

export default function GenHome() {
  return (
    <div>
      <header>
         <div className=" flex justify-center pl-5 pt-4 text-2xl font-medium text-blue-500">
            <h3>csMIS</h3>
            <img src=" https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" width="60" height="80" alt="uglogo"/>
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="Log">Login</NavLink>
              <NavLink to="StaffHomePage">Staff Home</NavLink>
            </div>
          </div>
        </nav>
      </header>
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
                  </ul></div>
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
              <img src=" ug main2.jpeg" alt="" width={2000} height="100"/>
            </div>
      </main>
      </div>
      
    </div>
  );
}

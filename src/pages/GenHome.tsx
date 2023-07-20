import React from "react";
import { NavLink } from "react-router-dom";
import Log from "./Log";
import StaffHome from "./staff Pages/StaffHomePage";
import Footer from "../components/Footer";

export default function GenHome() {
  return (
    <div>
      <header>
        <nav className=" m-6 mt-0 mb-0 bg-blue-950 text-white">
          <div className=" flex justify-between ">
            <div className=" order-1"></div>
            <div className=" order-2 space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="Log">Login</NavLink>
              <NavLink to="StaffHomePage">Staff Homepage</NavLink>
              <NavLink to="StudHomePage">Student Homepage</NavLink>
            </div>
          </div>
        </nav>

        <div className=" flex justify-center m-6 text-2xl font-medium text-blue-500 space-x-1">
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
          <div className=" flex bg-blue-950 text-white pl-20 m-6 mt-0">
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
          <div className=" flex justify-center h-72 m-6">
            <img src=" ug main2.jpeg" alt="" width={2000}/>
          </div>
          <div className=" flex justify-between m-6 mb-0">
            <div className=" text-green-600">
              <h4>News</h4>
            </div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="bi bi-arrow-left-circle" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/> </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/> </svg>
            </div>
          </div>
          <div className=" grid grid-cols-6 gap-1 text-center h-40 shadow-md m-6 mt-0">
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
            <div className=" grid grid-cols-1 bg-slate-400 rounded-sm underline"></div>
          </div>
        </main>

      </div>
      < Footer/>
    </div>
  );
}

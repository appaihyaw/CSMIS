import React from "react";
import Login from "../components/Login";
import Dropdown from "../Dropdown";
function Log() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-white">
      <div className="md:w-1/3 max-w-sm">
        <img src="University_of_Ghana.png" alt="ugLogo" />
      </div>
      <div className=" w-[500px] bg-gray-100 h-60 p-10 flex justify-start rounded shadow-md">
        <div>
          <div className=" mb-5">
            <Dropdown />
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Log;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaUserEditSolid } from "react-icons/lia";
import { ImStatsDots } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const StaffHome = () => {
  // Function body
  const menus = [
    { name: "Home", link: "/StaffHomePage", icon: AiOutlineHome }, //change link: to "/" to arrive at General homepage from this page
    { name: "Students", link: "/StudentsPage", icon: PiStudentFill },
    {
      name: "Classes",
      link: "/ClassesPage",
      icon: SiGoogleclassroom,
      margin: true,
    },
    { name: "Records", link: "/RecordsPage", icon: LiaUserEditSolid },
    {
      name: "Statistics",
      link: "/StatisticsPage",
      icon: ImStatsDots,
      margin: true,
    },
    { name: "Resources", link: "/ResourcesPage", icon: GrResources },
    {
      name: "Settings",
      link: "/SettingsPage",
      icon: IoMdSettings,
      margin: true,
    },
    { name: "Sign Out", link: "/", icon: BiLogOut },
  ];

  return (
    // JSX/tsx code
    <section className="flex gap-6">
      <div className={"bg-[#18345C] min-h-screen w-72 text-gray-100 px-4 "}>
        <div>
          <img src="Group 7010.png" alt="Group 7010" />
        </div>
        <div className=" mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className=" ${menu?.margin && 'mt-3' } flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-300 rounded-md"
            >
              <div> {React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 className={"whitespace-pre duration-500 "}>{menu?.name}</h2>
            </Link>
          ))}
          ))
        </div>
      </div>
    </section>
  );
};

export default StaffHome;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaUserEditSolid } from "react-icons/lia";
import { ImStatsDots } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { TbMenu2 } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { StatsIcon } from "../svgIcons/StatsIcon";

const SideNav = () => {
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
      link: "/StaffStatsPage",
      icon: StatsIcon,
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    // JSX/tsx code
    <>
      <div className="max-w-[1640] mx-auto flex justify-between bg-slate-100 items-center p-4">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed flex items-center cursor-pointer left-10 top-5 "
          >
            {React.createElement(TbMenu2, { size: "20" })}
          </button>
          <div className="bg-gray-200 rounded-full ml-20 flex items-center h-9 px-2 w-[200px] sm:w-[400px] lg:w[500px]">
            <AiOutlineSearch size={20} />
            <input
              className="bg-transparent p-2 focus:outline-none w-full"
              type="text"
              placeholder="Search Class, Documents, Course..."
            />
          </div>
        </div>
        <div className="flex ">
          <div className=" cursor-pointer flex items-center mx-4 bg-gray-200 rounded-full px-2 py-0.5">
            <MdLightMode
              className="bg-white hover:bg-white rounded-full"
              size={18}
            />
            <MdOutlineLightMode
              className="hover:bg-gray-50 rounded-full"
              size={18}
            />
          </div>
          <div className="flex cursor-pointer rounded-full bg-gray-200 mx-4 px-3 py-2">
            <BsBell className="mx-1 hover:bg-white rounded-full " />

            <IoMdSettings className="mx-1 hover:bg-white rounded-full " />
          </div>
          <div className="w-8 h-8 cursor-pointer">
            <img className=" rounded-full" src="dummy user.png" />
          </div>
        </div>

        {/* overlay*/}
        {isOpen ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            isOpen
              ? "bg-[#18345C] fixed top-0 z-10 left-0 min-h-screen w-72 text-gray-100 p-5  ease-in-out duration-300 "
              : "bg-[#18345C] fixed top-0 z-10 min-h-screen w-72 text-gray-100 p-5  left-[-100%] ease-in-out duration-300 "
          }
        >
          <div className={" "}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="fill-black cursor-pointer text-gray-400  fixed ml-60"
            >
              {React.createElement(AiOutlineCloseCircle, { size: "18" })}
            </button>
            <div className="mr-20 flex">
              <img src="Group 7010.png" alt="Group 7010" />
              <span className="font-bold mr-4 px-6">csMIS</span>
            </div>
            <nav className=" mt-4 flex flex-col gap-3 relative p-4">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className=" ${menu?.margin && 'mt-3' } flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-300 hover:text-black rounded-md"
                >
                  <div className="text-black  ">
                    {" "}
                    {React.createElement(menu?.icon, { size: "20" })}
                  </div>
                  <h2
                    className={
                      "whitespace-pre duration-500 font-normal hover:font-bold w-full h-full"
                    }
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

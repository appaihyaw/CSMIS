import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineHome, AiOutlineCloseCircle } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaUserEditSolid } from "react-icons/lia";
import { ImStatsDots } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { TbMenu2 } from "react-icons/tb";
const StudSideNav = () => {
  // Function body
  const menus = [
    { name: "Home", link: "/StudHomePage", icon: AiOutlineHome }, //change link: to "/" to arrive at General homepage from this page
    {
      name: "Course Registration",
      link: "/CourseRegPage",
      icon: PiStudentFill,
    },
    {
      name: "Courses",
      link: "/StudCoursesPage",
      icon: SiGoogleclassroom,
      margin: true,
    },
    { name: "Academic Records", link: "*", icon: LiaUserEditSolid },
    {
      name: "eResources",
      link: "*",
      icon: ImStatsDots,
      margin: true,
    },
    { name: "Announcements", link: "*", icon: GrResources },
    { name: "Statistics", link: "*", icon: GrResources },
    {
      name: "Settings",
      link: "*",
      icon: IoMdSettings,
      margin: true,
    },
    { name: "Sign Out", link: "/", icon: BiLogOut },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    // JSX/tsx code
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-30 flex items-center cursor-pointer left-10 top-5 "
        >
          {React.createElement(TbMenu2, { size: "18" })}
        </button>
      ) : (
        <section className="flex gap-6">
          <div
            className={
              "bg-[#18345C] min-h-screen w-72 text-gray-100 p-5 ${isOpen ? 'translate-x-full':'translate-x-0'} ease-in-out duration-300"
            }
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="fill-black cursor-pointer text-gray-400  fixed ml-60"
            >
              {React.createElement(AiOutlineCloseCircle, { size: "18" })}
            </button>
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
                  <div className="text-black">
                    {" "}
                    {React.createElement(menu?.icon, { size: "20" })}
                  </div>
                  <h2 className={"whitespace-pre duration-500 "}>
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StudSideNav;

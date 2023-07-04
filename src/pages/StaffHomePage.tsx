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
    { name: "Home", link: "/StaffHomePage", icon: AiOutlineHome },
    { name: "Students", link: "/StudentsPage", icon: PiStudentFill },
    { name: "Classes", link: "/ClassesPage", icon: SiGoogleclassroom },
    { name: "Records", link: "/RecordsPage", icon: LiaUserEditSolid },
    { name: "Statistics", link: "/StatisticsPage", icon: ImStatsDots },
    { name: "Settings", link: "/SettingsPage", icon: IoMdSettings },
    { name: "Resources", link: "/ResourcesPage", icon: GrResources },
    { name: "Sign Out", link: "/", icon: BiLogOut },
  ];
  const [open, setOpen] = useState(true);
  return (
    // JSX/tsx code
    <section className="flex gap-6">
      <div
        className={
          "bg-[#18345C] min-h-screen ${open ? w-72:w-16 } duration-500 text-gray-100 px-4 "
        }
      >
        <div>
          <HiMenu
            size={25}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={
                "group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-300 round"
              }
            >
              <div> {React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: "${i+3}00msl" }}
                className={
                  'whitespace-pre duration-500 ${ !open && "opacity-0 translate-x-28 overflow-hidden"  }'
                }
              >
                {" "}
                {menu?.name}{" "}
              </h2>
              <h2
                className={
                  "${absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-lg drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit"
                }
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          ))
        </div>
      </div>
    </section>
  );
};

export default StaffHome;

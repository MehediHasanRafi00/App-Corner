import React from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="  shadow">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#632ee3"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#632ee3] text-white" : ""
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#632ee3] text-white" : ""
                  }
                  to={"/apps"}
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#632ee3] text-white" : ""
                  }
                  to={"/installation"}
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="flex items-center gap-2 ">
            <img className="w-11" src={logo} alt="" />
            <span className="text-xl font-bold gradient-text hidden md:block">
              AppCorner
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink
                className={(({ isActive }) =>
                  isActive
                    ? "border-b-3 border-[#632ee3] text-[#632ee3] rounded-none"
                    : ""
                )}
                to={"/"}
              >
                <IoIosHome size={17} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-3 border-[#632ee3] text-[#632ee3] rounded-none"
                    : ""
                }
                to={"/apps"}
              >
                <FaAppStore size={17}/>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-3 border-[#632ee3] text-[#632ee3] rounded-none"
                    : ""
                }
                to={"/installation"}
              >
                <MdOutlineInstallDesktop size={17}/>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"https://github.com/MehediHasanRafi00/"}
            className="btn gradient-bg"
          >
            <FaGithub className="text-xl" /> Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

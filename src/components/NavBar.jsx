import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import logo from "/logo-sm.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import light_logo from "/logo-light.png"
import dark_logo from "/logo-dark.png"

const NavMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const NavBar = ({ scroll }) => {

  const [isOpen, setIsOpen] = useState(false);
  

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="container flex flex-col items-center justify-center">
      <div className="w-[85%] flex items-center justify-between py-2 md:py-5 ">

        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="logo" className="w-6" />
          <img
            src={dark_logo}
            alt="logo"
            className={`block ${isHome || scroll ? "md:block" : "md:hidden"}`}
          />
          <img
            src={light_logo}
            alt="logo"
            className={` ${scroll || isHome ? "hidden" : "hidden md:block"}`}
          /> */}
          <p   className={`block font-semibold text-xl md:text-2xl ${isHome || scroll ? " herotext_color md:block" : "text-white"}`}>Muhammad Hamid</p>
        </div>

        <div className="hidden md:flex w-[45%]">
          <ul className="flex items-center justify-between w-full">
            {NavMenu.map((ele, index) => (
              <li key={index}>
                <NavLink
                  to={ele.path}
                  className={({ isActive }) =>
                    isActive
                      ? `relative font-medium active ${ele.name === "Home"?"sudo_class":""}`
                      : "relative font-medium navtext link"
                  }
                >
                  {ele.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4">
          <button className={`button-border hover:-translate-y-1 cursor-pointer transition duration-300 px-2 rounded-xs py-1 flex items-center gap-2 ${isHome ? "bg-transparent nav_button" : ` ${scroll ? "button-bg text-white" : "bg-white nav_button"}`}`}>
            Hire Me!
            <MdKeyboardDoubleArrowRight />
          </button>
          {/*  */}
        </div>

        <div className="md:hidden text-4xl cursor-pointer">
          <MdMenu onClick={() => setIsOpen((prev) => !prev)} />
        </div>
      </div>

      <div className={`md:hidden bg-white w-full px-6 pb-5 overflow-hidden ease-in-out  ${isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 `}>
        <ul className="flex flex-col gap-4 p-4">
          {NavMenu.map((ele, index) => (
            <li key={index}>
              <NavLink
                to={ele.path}
                className="block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {ele.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="button-border hover:-translate-y-1 transition duration-300 px-3 py-2 flex items-center gap-2">
              Hire Me!
              <MdKeyboardDoubleArrowRight />
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};

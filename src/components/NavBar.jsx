import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Data } from "../context/Store";

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
  const {btnColor} = useContext(Data)
  const location = useLocation();

  const isHome = location.pathname === "/";
  
  return (
    <nav className="container flex flex-col items-center justify-center"
    style={{"--theme-color":btnColor}}
    >
      <div className="w-[90%] flex items-center justify-between py-2 md:py-4 ">

        <div className="flex items-center justify-center">
          <p className={`block font-semibold text-xl md:text-2xl ${isHome || scroll ? " herotext_color md:block" : "text-white"}`}>Muhammad Hamid</p>
        </div>

        <div className="hidden md:flex w-[55%]">
          <ul className="flex items-center justify-between w-full">
            {NavMenu.map((ele, index) => (
              <li key={index}>
                <NavLink
                  to={ele.path}
                  className={({ isActive }) =>
                    isActive
                      ? `relative  text-[17px] active ${ele.name === "Home" ? "sudo_class" : ""}`
                      : "relative text-[17px] navtext navlink"
                  }
                >
                  {ele.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-between gap-4 w-[10%]">
          <a href="mailto:mughal.hamid@gmail.com?subject=Hiring Inquiry">
            <button  
             className={`button-border hover:-translate-y-1 cursor-pointer transition duration-300 px-3 rounded-xs py-[7px] md:text-[15px] font-semibold flex items-center gap-2 ${
               isHome
                 ? "bg-transparent nav_button"
                 : scroll
                 ? "text-white"
                 : "bg-white nav_button"
             }`}
             style={{
               color: isHome ? btnColor : undefined,
               borderColor: btnColor,
               backgroundColor: !isHome && scroll ? btnColor : undefined,
             }}
            >
              Hire Me!
              <MdKeyboardDoubleArrowRight />
            </button>
          </a>
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
            <button className="button-border hover:-translate-y-1 transition duration-300 px-3 py-2 flex items-center gap-2"
            >
              Hire Me!
              <MdKeyboardDoubleArrowRight />
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};


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
  const { btnColor } = useContext(Data)
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav
      className="container mx-auto flex flex-col items-center justify-center"
      style={{ "--theme-color": btnColor }}
    >
      {/* Navbar Top */}
      <div className="w-[94%] sm:w-[92%] lg:w-[90%] flex items-center justify-between py-3 sm:py-4">

        {/* Logo / Name */}
        <div className="flex items-center">
          <NavLink to="/">
            <p
              className={`font-semibold text-lg xs:text-xl sm:text-2xl whitespace-nowrap ${isHome || scroll
                  ? "herotext_color"
                  : "text-black md:text-white"
                }`}
            >
              Rohail Ahmad
            </p>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 max-w-[650px] mx-6 lg:mx-10">
          <ul className="flex items-center justify-center gap-5 lg:gap-8 xl:gap-10 w-full">
            {NavMenu.map((ele, index) => (
              <li key={index} className="whitespace-nowrap">
                <NavLink
                  to={ele.path}
                  className={({ isActive }) =>
                    isActive
                      ? `relative text-sm lg:text-[16px] xl:text-[17px] active ${ele.name === "Home" ? "sudo_class" : ""
                      }`
                      : "relative text-sm lg:text-[16px] xl:text-[17px] navtext navlink"
                  }
                >
                  {ele.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Hire Button */}
        <div className="hidden md:flex shrink-0">
          <a href="mailto:rohailrao07@gmail.com?subject=Hiring Inquiry">
            <button
              className={`button-border hover:-translate-y-1 cursor-pointer transition duration-300 px-3 sm:px-4 rounded-xs py-2 text-sm lg:text-[15px] font-semibold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${isHome
                  ? "bg-transparent nav_button"
                  : scroll
                    ? "text-white"
                    : "bg-white nav_button"
                }`}
              style={{
                color: isHome ? btnColor : undefined,
                borderColor: btnColor,
                backgroundColor:
                  !isHome && scroll ? btnColor : undefined,
              }}
            >
              Hire Me!
              <MdKeyboardDoubleArrowRight />
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-3xl sm:text-4xl cursor-pointer flex items-center"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden w-full overflow-hidden bg-white transition-all duration-500 ease-in-out ${isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-2 px-6 sm:px-10 py-4 sm:py-5">
          {NavMenu.map((ele, index) => (
            <li key={index}>
              <NavLink
                to={ele.path}
                className="block py-2.5 text-base sm:text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {ele.name}
              </NavLink>
            </li>
          ))}

          <li className="pt-2">
            <a href="mailto:rohailrao07@gmail.com?subject=Hiring Inquiry">
              <button
                className="button-border hover:-translate-y-1 transition duration-300 px-4 py-2.5 flex items-center gap-2 text-sm sm:text-base"
              >
                Hire Me!
                <MdKeyboardDoubleArrowRight />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


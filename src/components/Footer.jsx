import logo from "../../public/logo-sm.png";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FooterCol } from "./FooterCol";
import { FooterStrip } from "./FooterStip";

const company = ["Home", "About", "Service"];

const information = ["Resume", "Client Say", "Projects"];

const moreinfo = ["Blogs", "Contact", "Terms & Condition"];

export const Footer = () => {
  return (
    <>
      <section className="container footer_bg flex items-center justify-center border-b border-b-gray-400 pb-6">
        <div className="w-[85%] flex md:items-center md:justify-center flex-col md:flex-row  gap-10 ">
          <div className="col-1 flex flex-col w-full md:w-[45%] gap-7">
            <div className="col-1 w-[20%] flex items-center gap-2">
              <img src={logo} alt="logo" className="w-6" />
              <h1 className="font-bold text-2xl cursor-pointer text-white">
                SELFOWN
              </h1>
            </div>
            <p className="text-gray-400 text-[20px]">
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <div className="flex items-center gap-2">
              <a href="#">
                <SlSocialFacebook className="text-2xl cursor-pointer text-gray-400" />
              </a>
              <a href="#">
                <CiTwitter className="text-2xl hover:text-blue-600 cursor-pointer  text-gray-400" />
              </a>
              <a href="#">
                <FiGithub className="text-2xl hover:text-red-600 cursor-pointer  text-gray-400" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl hover:text-blue-600 cursor-pointer  text-gray-400" />
              </a>
            </div>
          </div>
          <FooterCol heading={"Company"} array={company} />
          <FooterCol heading={"Information"} array={information} />
          <FooterCol heading={"More Info"} array={moreinfo} />
        </div>
      </section>
      <FooterStrip />
    </>
  );
};

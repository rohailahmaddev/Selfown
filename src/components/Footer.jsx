import logo from "../../public/logo-sm.png";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FooterCol } from "./FooterCol";
import { FooterStrip } from "./FooterStip";

const company = [{
  name:"Home",
path:"/"}, {name:"About",
  path:"/about"
},{ name:"Service",
  path:"/services"
}];

const information = [{
  name:"Resume",
  path:"/resume"
}, {name:"Client Say",
  path:"",
  id:"slider"
}, {name:"Projects",
  path:"/projects"
}];

const moreinfo = [{name:"Blogs",
  path:"/blogs"
}, {name:"Contact",
  path:"/contact"
}, {name:"Terms & Condition",
  path:"",
  id:"footer"
}];

export const Footer = () => {
  return (
    <>
      <section className="container footer_bg flex items-center justify-center border-b border-b-gray-400 pb-6" id="footer">
        <div className="w-[85%] flex md:items-center md:justify-center flex-col md:flex-row  gap-10 ">
          <div className="col-1 flex flex-col w-full md:w-[45%] gap-7">
            <div className="col-1 w-[60%] flex items-center gap-2 pt-6">
              {/* <img src={logo} alt="logo" className="w-6" /> */}
              <h1 className="font-bold text-2xl cursor-pointer text-white md:w-full">
                Muhammad Hammid
              </h1>
            </div>
            <p className="text-gray-400 text-[20px]">
            Building modern and scalable web applications
            with clean code and seamless user experiences.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/mughal.hamid" target="_blank">
                <SlSocialFacebook className="text-2xl cursor-pointer text-gray-400" />
              </a>
              <a href="https://x.com/mughal_hamid" target="_blank">
                <CiTwitter className="text-2xl hover:text-blue-600 cursor-pointer  text-gray-400" />
              </a>
              <a href="https://github.com/mughalhamid" target="_blank">
                <FiGithub className="text-2xl hover:text-red-600 cursor-pointer  text-gray-400" />
              </a>
              <a href="https://www.instagram.com/mughal.hamid" target="_blank">
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

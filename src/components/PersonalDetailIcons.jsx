import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { PiLinkedinLogo } from "react-icons/pi";
import { GrGithub } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";

export const PersonalDetailIcons = () => {
  return (
    <div className="flex items-center justify-start gap-5">
      <a href="#">
        <GrGithub className="text-3xl cursor-pointer" />
      </a>
      <a href="#">
        <IoLogoTwitter className="text-3xl hover:text-blue-600 cursor-pointer" />
      </a>
      <a href="#">
        <TiSocialGooglePlusCircular className="text-3xl hover:text-red-600 cursor-pointer" />
      </a>
      <a href="#">
        <PiLinkedinLogo className="text-3xl hover:text-blue-600 cursor-pointer" />
      </a>
    </div>
  );
};

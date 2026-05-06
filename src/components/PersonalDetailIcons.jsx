import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialTwitterCircular } from "react-icons/ti";


export const PersonalDetailIcons = () => {
  return (
    <div className="flex items-center justify-start gap-5">
      <a href="#">
        <VscGithub className="text-4xl text-gray-400 hover:text-black cursor-pointer" />
      </a>
      <a href="#">
        <TiSocialTwitterCircular className="text-5xl hover:text-blue-400 text-gray-400 cursor-pointer" />
      </a>
      <a href="#">
        <TiSocialGooglePlusCircular className="text-5xl text-gray-400 hover:text-red-600 cursor-pointer" />
      </a>
      <a href="#">
        <TiSocialLinkedinCircular className="text-5xl hover:text-blue-400 text-gray-400 cursor-pointer" />
      </a>
    </div>
  );
};

import { useState } from "react";
import { PageProjectsCard } from "./PageProjectsCard";

const menu = ["All", ".NET", "C#", "Next.JS"];

export const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMenu, setActiveMenu] = useState("All");
  const handleClick = (i, ele) => {
    setActiveTab(i);
    setActiveMenu(ele);
  };
  return (
    <section className={`container flex items-center justify-center pb-25 `}>
      <div className="w-[90%] flex flex-col items-center justify-center">
        <div className=" pt-25 w-full pb-20">
          <ul className="border-b border-dashed border-b-blue-300 flex items-center">
            {menu.map((ele, i) => {
              return (
                <li
                  key={i}
                  className={`p-3 cursor-pointer ${activeTab === i ? ` border-b mb-[-1px] border-b-blue-800` : `border-0`} herotext_color`}
                  onClick={() => handleClick(i, ele)}
                >
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
        <PageProjectsCard activeMenu={activeMenu} />
      </div>
    </section>
  )
}
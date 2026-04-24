import { useState } from "react"
import { SerEdu } from "./SerEdu"
import { Projects } from "./Projects"

const menu = [
    "All",
    "Angular",
    "Mongodb",
    "Bootstrap"
]

export const ProjectMenu = ({display}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [activeMenu, setActiveMenu] = useState("All")
    const handleClick = (i,ele) => {
        setActiveTab(i)
        setActiveMenu(ele)
    }
    return(
        <section className="container flex items-center justify-center pb-25">
            <div className="w-[85%] flex flex-col items-center justify-center">
                {display && <SerEdu btn_text={"WORK"} heading={"My Projects"}  para={"We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning ."}/>}
                <div className="pt-25 w-full pb-20">
                    <ul className="border-b border-dashed border-b-blue-300 flex items-center">
                        {
                            menu.map((ele,i)=>{
                                return(
                                    <li key={i} className={`p-3 cursor-pointer ${activeTab ===i ?` border-b mb-[-1px] border-b-blue-800`: `border-0`} herotext_color`}
                                     onClick={() => handleClick(i,ele)}
                                     >
                                        {ele}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Projects activeMenu={activeMenu}/>
            </div>
        </section>
    )
}
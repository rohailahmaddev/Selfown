import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import logo from "../assets/logo-sm.png"
import { NavLink } from "react-router-dom";

const NavMenu = [
    {
        name:'Home',
        path:"/"
    },
    {
        name:'About',
        path:"/about"
    },
    {
        name:'Services',
        path:"/services"
    },
    {
        name:'Resume',
        path:"/resume"
    },
    {
        name:'Projects',
        path:"/projects"
    },
    {
        name:'Blogs',
        path:"/blogs"
    },
    {
        name:'Contact',
        path:"/contact"
    },
]


export const NavBar = () => {


    return(
        <nav className={`container flex items-center justify-center`}>
            <div className="w-[85%] flex items-center justify-between py-5">
                <div className="col-1 w-[17%] flex items-center gap-2">
                   <img src={logo} alt="logo" className="w-10" />
                   <h1 className="font-bold text-2xl cursor-pointer">SELFOWN</h1>
                </div>
                <div className="col-2 w-[47%]">
                    <ul className="list-none flex items-center justify-between">
                    {
                        NavMenu.map((ele,index) => {
                            return(
                                <li key={index} className="cursor-pointer">
                                  <NavLink to={ele.path} className={({isActive}) => isActive? "relative cursor-pointer font-medium active sudo_class":"relative cursor-pointer font-medium navtext link" }>  {ele.name} </NavLink>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="col-3 w-[10%]">
                    <button className="button-border hover:-translate-y-1 transition duration-300 cursor-pointer px-3 py-2 font-medium flex items-center justify-center gap-2">Hire Me!<MdKeyboardDoubleArrowRight /></button>
                </div>
            </div>
        </nav>
    )
}
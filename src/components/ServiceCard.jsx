import awsome from "../assets/Awsome.svg"
import dynamic from "../assets/Dynamic.svg"
import branding from "../assets/Branding.svg"
import { SerEdu } from "./SerEdu"

export const ServicesCard = ({display=true,bg="gradient_bg"}) => {
    const cards = [
        {
            bg:"bg-red-200",
            icon:awsome,
            name:"Awesome Support",
            discription:"Some quick example text to build on the card title and make up the bulk of the card's content platform."
        },
        {
            bg:"bg-blue-200",
            icon:dynamic,
            name:"Dynamic Growth",
            discription:"Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
        },
        {
            bg:"bg-green-200",
            icon:branding,
            name:"Branding Identity",
            discription:"Separated they live in Bookmarksgrove right at the coast of the Semantics, and large."
        },
        {
            bg:"bg-red-200",
            icon:awsome,
            name:"Awesome Support",
            discription:"Some quick example text to build on the card title and make up the bulk of the card's content platform."
        },
        {
            bg:"bg-blue-200",
            icon:dynamic,
            name:"Dynamic Growth",
            discription:"Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
        },
        {
            bg:"bg-green-200",
            icon:branding,
            name:"Branding Identity",
            discription:"Separated they live in Bookmarksgrove right at the coast of the Semantics, and large."
        },

    ]
    const array = display?cards.slice(0,3):cards
    return(
        <section className={`container flex items-center justify-center ${bg} ${display?"pt-25":"pt-0"}`}>
            <div className="w-[85%] flex items-center justify-center flex-col ">
              {display && <SerEdu btn_text={"SERVICES"} heading={"Our Services"} para={"We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning ."}/>}             <div className="pt-25">
                <ul className={`${display?"flex justify-between":"grid grid-cols-3 grid-rows-2"} items-center bg-transparent gap-5`}>
                    {
                        array.map((ele,index) => {
                            return(
                                <li key={index} className="">
                                    <div className="shadow-md flex flex-col gap-5 p-6 bg-white pb-15">
                                        <div className={`${ele.bg} rounded p-3 w-10`}>
                                            <img src={ele.icon} alt="icon" className="w-full"/>
                                        </div>
                                        <h2 className="text-2xl herotext_color font-medium">{ele.name}</h2>
                                        <p className="herotext_color h-20">{ele.discription}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
             </div>
            </div>
        </section>
    )
}
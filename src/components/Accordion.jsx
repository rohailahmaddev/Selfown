import { useState } from "react"
import { GrFormSubtract } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";

export const Accordion = ({image,array}) => {
    const [openIndex, setOpenIndex] = useState(null)
    
    const handleAccordion = (i) => {
            setOpenIndex(prev => prev === i ? null : i )
    }
    return(
         <div className=" bg-indigo-100 flex justify-between w-full">
                        <div className="w-[30%] flex items-center justify-center flex-col">
                            <img src={image} alt="school child" className="w-[50%]"/>
                            <h2 className="herotext_color text-2xl"> Educaton</h2>
                        </div>
                        <ul className="w-[70%] flex flex-col">
                        {
                            array.map((ele,index) =>{
                                return(
                            <li key={index}>
                            <div className="flex items-center justify-between p-5 bg-white w-full border-b-1 border-dashed border-blue-300">
                                {openIndex === index ?<GrFormSubtract className="text-xl cursor-pointer w-[5%] text" onClick={()=>handleAccordion(index)}/>:<FaPlus className="text-xl cursor-pointer w-[5%] text" onClick={()=>handleAccordion(index)}/>}
                                <h2 className="herotext_color text-2xl w-[75%] cursor-pointer">{ele.question}</h2>
                                <span className="text w-[15%]">{ele.date}</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index?`max-h-125 opacity-100`: `max-h-0 opacity-0`}`}>
                                <div className="flex  flex-col bg-transparent gap-3 p-6 ">
                                    <p className="answer text-[20px]">{ele.answer}</p>
                                    <p className="herotext_color text-2xl">{ele.institute}</p>
                                </div>  
                            </div>
                        </li>
                                )
                            })}
                        </ul>
                     </div>
    )
}
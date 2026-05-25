import { useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";

export const Accordion = ({ image, array,exp }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordion = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  return (
    <div className=" bg-indigo-100 flex justify-between flex-col md:flex-row w-full">
      <div className="w-full md:w-[30%] flex items-center justify-center flex-col">
        <img src={image} alt="school child" className=" w-[55%] md:w-[60%]" />
        <h2 className="herotext_color text-2xl"> {exp} </h2>
      </div>
      <ul className="w-full md:w-[70%] flex flex-col">
        {array.map((ele, index) => {
          return (
            <li key={index}>
              <div className="flex items-center  gap-3 md:gap-0 justify-between p-3 md:p-5 bg-white w-full border-b border-dashed border-blue-300">
                {openIndex === index ? (
                  <GrFormSubtract
                    className="md:text-xl cursor-pointer w-[5%] text"
                    onClick={() => handleAccordion(index)}
                  />
                ) : (<FaPlus
                    className="md:text-xl cursor-pointer w-[5%] text"
                    onClick={() => handleAccordion(index)}
                  />
                )}
                <h2 className="herotext_color text-xl w-[75%] cursor-pointer" onClick={() => handleAccordion(index)}>
                  {ele.question}
                </h2>
                <span className="text w-[15%]">{ele.date}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? `max-h-125 opacity-100` : `max-h-0 opacity-0`}`}
              >
                <div className="flex  flex-col bg-transparent gap-3 p-6 ">
                  <p className="answer text-[10px] md:text-[20px]">{ele.answer}</p>
                  <p className="herotext_color text-xl md:text-2xl">{ele.institute}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

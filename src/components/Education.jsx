import { SerEdu } from "./SerEdu"
import image from "../assets/school.png"
import { Accordion } from "./Accordion";
import jobImage from "../assets/job.png"

const accordion = [
    {
        question:"MSc IT Master Degree",
        date:"2010-2012",
        answer:"Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institute:"Harvard University, Cambridge, MA, United States"
    },
    {
        question:"BCA college complete course",
        date:"2007-2010",
        answer:"Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institute:"Columbia University, New York, NY, United States"
    },
    {
        question:"High/Higher",
        date:"1999-2007",
        answer:"Princeton University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institute:"Princeton University, Princeton, NJ, United States"
    }
]

const accordion2 = [
    {
        question:"ABC themes - Web Design IT Company",
        date:"2020 - 2021",
        answer:"- Delivered quality code by applying the best development practices",
        institute:"A-000 Chambers Street, Suite z-701 New York, NY 10007, United States"
    },
    {
        question:"DEF Themes - Creative full stack web design & development",
        date:"2016 - 2019",
        answer:"- Delivered quality code by applying the best development practices",
        institute:"A-000 Chambers Street, Suite z-701 New York, NY 10007, United States"
    },
    {
        question:"GHI Themes - Web & App IT Company",
        date:"2013 - 2015",
        answer:"- Delivered quality code by applying the best development practices",
        institute:"A-000 Chambers Street, Suite z-701 New York, NY 10007, United States"
    },
]

export const Eductation = () => {

return(
    <section className="container flex items-center justify-center pb-10">
        <div className="w-[85%] flex items-center justify-center flex-col pt-25 gap-15">
         <SerEdu btn_text={"LIFE TIME"} heading={"Education & Experience"} para={"We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning ."}/>
         <Accordion image={image} array={accordion}/>
         <div className="border-b-1 border-dashed border-blue-100 pt-5 w-full"></div>
         <Accordion image={jobImage} array={accordion2}/>
        </div>
     </section>
    )
}
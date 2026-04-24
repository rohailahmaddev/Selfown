import android from '../assets/Andriod.svg'
import react from '../assets/React.svg'
import node from '../assets/Node.svg'
import mongo from '../assets/Mongodb.svg'
import vue from '../assets/Vue.svg'
import laravel from '../assets/Laravel.svg'
import bootstrap from '../assets/Bootstrap.svg'
import angular from '../assets/Angular.svg'

const skills = [
    {
        skill:"React",
        experience:"8 Months Experience",
        icon:react
    },
    {
        skill:"Node.js",
        experience:"10 Months Experience",
        icon:node
    },
    {
        skill:"Vue",
        experience:"2 Year Experience",
        icon:vue
    },
    {
        skill:"Mongodb",
        experience:"3 Year Experience",
        icon:mongo
    },
    {
        skill:"Laravel",
        experience:"1 Year Experience",
        icon:laravel
    },
    {
        skill:"Bootstrap",
        experience:"3 Year Experience",
        icon:bootstrap
    },
    {
        skill:"Angular",
        experience:"1 Year Experience",
        icon:angular
    },
    {
        skill:"Andriod",
        experience:"2 Year Experience",
        icon:android
    },
]

export const Skill = () => {
    return (
        <section className="container flex items-center justify-center">
            <div className="w-[85%] flex items-center justify-center pt-25 pb-25">
                <ul className='flex items-center justify-center flex-wrap gap-4'>
                    {
                      skills.map((ele,index) => {
                        return(
                            <li key={index}>
                                <div className="flex items-center justify-between p-4 rounded shadow-md gap-5">
                                    <img src={ele.icon} alt="icon" className='w-10'/>
                                    <div className="flex flex-col">
                                        <h3 className="herotext_color text-[20px] font-medium">{ele.skill}</h3>
                                        <span className="herotext_color">{ele.experience}</span>
                                    </div> 
                                </div>
                            </li>
                        )
                      })
                    }
                </ul>
            </div>
        </section>
    )
}
import image from "../assets/About2.png"
import { PersonalDetail } from "./PersonalDetail"
import { PersonalDetailIcons } from "./PersonalDetailIcons"


export const AboutPersonalDetail = () => {
    return (
        <section className="container flex items-center justify-center">
            <div className="w-[85%] flex justify-between items-center">
                <div className="w-[40%]">
                        <img src={image} alt="image" />
                </div>

                <div className="w-[50%] flex gap-10 flex-col">
                    <PersonalDetail   displayProperty="flex flex-col w-full gap-10" col1Width="w-full" col2Width="w-full" icons={false}/>
                    <PersonalDetailIcons/>
                </div>
            </div>
        </section>
    )
}
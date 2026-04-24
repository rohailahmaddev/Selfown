import { ContactForm } from "../components/ContanctForm"
import { Eductation } from "../components/Education"
import { HeroSection } from "../components/HeroSection"
import { LatestNews } from "../components/LatestNews"
import { MessageSend } from "../components/Message"
import { PersonalDetail } from "../components/PersonalDetail"
import { ProjectMenu } from "../components/ProjectsMenu"
import { SectionDivider } from "../components/SectionDivider"
import { ServicesCard } from "../components/ServiceCard"
import { Skill } from "../components/Skill"
import Slider from "../components/Slider"

export const Home = () => {
    return(
      <>
        <HeroSection />
        <PersonalDetail />
        <Skill />
        <ServicesCard />
        <Eductation />
        <SectionDivider top={`top-0`} bg={'bg-white'} svg={<svg viewBox="0 0 2880 150" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M110 105L2160 0H2880V150H0V105H110Z" fill="rgb(247, 250, 252)"></path> </svg>}/>
        <Slider/>
        <MessageSend/>
        <ProjectMenu/>
        <LatestNews/>
        <ContactForm/>
        <SectionDivider top={`-top-5`} bg={'bg-transparent'} svg={<svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="rgb(23, 45, 82)"></path>
        </svg>}/>
      </>
    )
}
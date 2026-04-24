import { Outlet } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contanct";
import { Eductation } from "./components/Education";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LatestNews } from "./components/LatestNews";
import { MessageSend } from "./components/Message";
import { NavBar } from "./components/NavBar";
import { PersonalDetail } from "./components/PersonalDetail";
import { ProjectMenu } from "./components/ProjectsMenu";
import { SectionDivider } from "./components/SectionDivider";
import { Skill } from "./components/Skill";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";


function App() {

  const [scroll, setScroll] = useState(false)
  
      useEffect(() =>{
          const handleScroll = () => {
              setScroll(window.scrollY>10)
          }
  
          window.addEventListener("scroll",handleScroll)
  
          return () => window.removeEventListener("scroll",handleScroll)
      },[])
  
  return (
    <>
    <header className={` h-20 top-0 sticky z-50 transition-all duration-300
    ${scroll?"bg-white":"bg-transparent"}
    `}>
      <NavBar />
    </header>

    <main className="container">
      <Outlet/>
    </main>

    <footer className="container">
      <Footer/>
    </footer>
    </>
  );
}

export default App;

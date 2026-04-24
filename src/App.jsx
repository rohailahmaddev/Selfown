import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={` h-20 top-0 sticky z-50 transition-all duration-300
    ${scroll ? "bg-white" : "bg-transparent"}
    `}
      >
        <NavBar />
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;

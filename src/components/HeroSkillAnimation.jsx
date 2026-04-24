import { useState, useEffect } from "react";

const skills = ["React", "Flutter", "Angular", "Vue"];

export default function HeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % skills.length);
        setAnimate(true); 
      }, 400); 

    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
  <span className="border-b-4 border-amber-600 inline-block overflow-hidden">
    <span
      className="inline-block"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {skills[currentIndex]}
    </span>
  </span>
  );
}
import authorImage from "../assets/1.png";
import HeroText from "./HeroSkillAnimation";

export const HeroSection = () => {
  return (
    <section className="container flex items-center justify-center">
      <div className="w-[100%] relative flex items-center justify-center">
        <div className="w-full flex items-center justify-end relative overflow-hidden">
          <div className="bg_overlay w-full h-[600px] absolute top-0"></div>
          <div className="w-[50%] h-[600px] z-[-1] ">
            <iframe
              className=" block w-[177.77%] h-[600px]  top-1/2 left-300 -translate-x-1/2 -translate-y-1/2 absolute"
              src="https://www.youtube-nocookie.com/embed/LBNDfxjEYlA?si=a6y-Rc56wsFbYrkB&controls=0&rel=0&modestbranding=1&autoplay=1&loop=1&mute=1"
              allowFullScreen
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className="col-1 w-[75%] absolute -top-10 flex items-center justify-between">
          <div className="flex flex-col justify-center gap-7 w-[65%]">
            <span className="text-2xl text text-center">
              Hi, I'm David Williamson
            </span>
            <h1 className="text-5xl font-bold herotext_color">
              I'm a freelance <HeroText />{" "}
            </h1>
            <h1 className="text-5xl font-bold herotext_color text-center">
              Developer
            </h1>
            <a
              href="../assets/Rohail Ahmad CV.pdf"
              download
              className="text-center"
            >
              <button className="button-bg rounded px-6 py-2 cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
          <div>
            <img src={authorImage} alt="Author image" className="h-160" />
          </div>
        </div>
      </div>
    </section>
  );
};
